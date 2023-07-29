import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React, { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";
import { Box } from "@mui/system";
import { FrontEndAndUX } from "./frontEndAndUX";

export function NewPF() {
  /* ---------------------------------Lenis Start ------------------------------ */
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  /* ---------------------------------Lenis End ------------------------------ */

  /* ---------------------------------Lenis End ------------------------------ */

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
      backgroundColor: "#fff",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("Copy");
    setCursorVariant("project");
  }

  function projectLeave(event) {
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

  return (
    <ReactLenis root>
      <canvas id="tvnoise"></canvas>
      <Box ref={ref} sx={{ height: "200rem" }}>
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>

        <Box
          sx={{
            zIndex: -1,
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            height: "100vh",
            display: "flex",
            alignItems: "flex-end",
            padding: "1rem 32px",
          }}
        >
          <Box
            component="motion.div"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <Box
              component="img"
              src="./profile.png"
              style={{ height: "70vh" }}
            />
          </Box>

          <Box
            component="p"
            className="body2"
            sx={{
              maxWidth: "300px",
              textAlign: "justify",
              marginRight: "1rem",
            }}
          >
            Hi, I am Elvin. I turn complex designs into clean, user-friendly
            interfaces. I’m quick but I don’t let a single detail slip thanks to
            my background in UX design
          </Box>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80%"
            viewBox="0 0 870 294"
            fill="none"
            style={{
              position: "relative",
              mixBlendMode: "difference",
            }}
          >
            <FrontEndAndUX />
          </svg>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 32px",
            zIndex: 2,
          }}
        >
          <p>ELVIN NDICHIA</p>
          <Box
            sx={{
              display: "grid",
              " p": {
                cursor: "default",
                border: "2px solid transparent",
                display: "inline-block",
              },
              "  p:hover": { borderBottom: "2px solid black" },
            }}
          >
            <div>
              <p
                className="body1"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                elvinndichia@gmail.com
              </p>
            </div>
            <div>
              <p
                className="body1"
                onMouseEnter={projectEnter}
                onMouseLeave={projectLeave}
              >
                +237 670 907 115
              </p>
            </div>
            <p className="body1">LinkedIn</p>
            <p className="body1">X || Twitter</p>
          </Box>
        </Box>
      </Box>
    </ReactLenis>
  );
}
