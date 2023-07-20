import React, { useState, useEffect } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";

const CursorContext = React.createContext();

export function CursorProvider({ children }) {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const cursorVariants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const cursorSpring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <CursorContext.Provider
      value={{
        ref,
        cursorVariants,
        cursorSpring,
        projectEnter,
        projectLeave,
        contactEnter,
        contactLeave,
        cursorText,
        cursorVariant,
      }}
    >
      <motion.div
        variants={cursorVariants}
        className="circle"
        animate={cursorVariant}
        transition={cursorSpring}
        style={{
          position: "fixed",
          zIndex: 100,
          display: "flex",
          flexFlow: "row",
          alignContent: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          height: "10px",
          width: "10px",
          backgroundColor: "#1e91d6",
          borderRadius: "200px",
          pointerEvents: "none",
          color: "#fff",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        <span
          className="cursorText"
          style={{
            flex: "auto",
            fontSize: "inherit",
            pointerEvents: "none",
            margin: "auto",
          }}
        >
          {cursorText}
        </span>
      </motion.div>
      {children}
    </CursorContext.Provider>
  );
}

export { CursorContext };
