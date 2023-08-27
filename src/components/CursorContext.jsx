import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { Box as MuiBox } from "@mui/system";
import useMouse from "@react-hook/mouse-position";

const Box = motion(MuiBox);

const CursorContext = createContext();

export function CursorContextProvider({ children }) {
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

  const variants = {
    default: {
      opacity: 1,
      height: "10px",
      width: "10px",
      fontSize: "16px",
      background:
        " linear-gradient(54deg, #EC0D78 0%, #FD2944 43.24%, #F84E37 72.80%, #FE880E 100%)",

      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    open: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      background:
        " linear-gradient(54deg, #EC0D78 0%, #FD2944 43.24%, #F84E37 72.80%, #FE880E 100%)",
      color: "#fff",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    homeUnderline: {
      opacity: 1,
      backgroundColor: "transparent",
      border: "2px solid #FE880E",
      height: "180px",
      width: "180px",
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function openEnter(event) {
    setCursorText("Open");
    setCursorVariant("open");
  }

  function openLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText(
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <g fill="currentColor">
            <path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9h9Z" />
            <path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708l-5 5Z" />
            <path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3.5Z" />
            <path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1h-3.5Z" />
          </g>
        </svg>
      </>
    );
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function quickEnter(event) {
    setCursorText(
      <Box component="img" sx={{ width: "100px" }} src="fast.png"></Box>
    );
    setCursorVariant("homeUnderline");
  }
  function quickLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <CursorContext.Provider
      value={{ quickEnter, quickLeave, openEnter, openLeave }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
          overflowY: "auto",
        }}
        ref={ref}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
            transition={spring}
          >
            <span className="cursorText">{cursorText}</span>
          </motion.div>
        </Box>
        {children}
      </Box>
    </CursorContext.Provider>
  );
}

// Custom hook to use the context
export function useCursorContext() {
  return useContext(CursorContext);
}
