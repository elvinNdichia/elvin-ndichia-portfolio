import { CursorContextProvider } from "../CursorContext";
import { useCursorContext } from "../CursorContext";
import { Box as MuiBox } from "@mui/system";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigateButton } from "../NavigateButton";
import { useState } from "react";

const Box = motion(MuiBox);

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

const boxVariants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
const imageVariants = {};

const AnimatedLines = ({ openEnter, openLeave, quickEnter, quickLeave }) => {
  const [thingBeingHovered, setThingBeingHovered] = useState("");

  const getOpacity = (hoverKey) => {
    return thingBeingHovered === hoverKey || thingBeingHovered === "" ? 1 : 0.5;
  };

  return (
    <>
      {/* Mobile Below */}
      <Box
        sx={{
          paddingTop: { xs: "80px", md: "100px" },
          ".h1": { textAlign: "center" },
          ".h5": {
            textShadow: `
            -1px -1px 0 #fff,  
            1px -1px 0 #fff,
            -1px 1px 0 #fff,
            1px 1px 0 #fff
          `,
          },
          display: { xs: "block", md: "block" },
        }}
      >
        <motion.div
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                My next projects will always
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                My next projects
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                be significantly better
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                will always be
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                than these 2 side
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                significantly better
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>works</Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                than these 2 side
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "block", md: "none" } }}>works</Box>
            </motion.h1>
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              variants={boxVariants}
              style={{
                position: "relative",
                display: "block",
                marginTop: "14px",
              }}
            >
              <div onMouseEnter={openEnter} onMouseLeave={openLeave}>
                <NavigateButton location="Contact" link="/contact" />
              </div>
            </motion.div>
          </div>
          <div style={{ marginTop: "56px" }} />
        </motion.div>
      </Box>
    </>
  );
};

export function Projects() {
  const { quickEnter, quickLeave, openEnter, openLeave } = useCursorContext();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          top: "1rem",
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            background: "#aaa",
            display: "flex",
            borderRadius: "60px",
            ".working-nav-link": {
              width: "130px",
              height: "36px",
              cursor: "pointer",
            },
          }}
        >
          <Link
            className="working-nav-link"
            to="/"
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box></Box>
          </Link>
          <Link
            className="working-nav-link"
            to="/projects"
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box></Box>
          </Link>
          <Link
            className="working-nav-link"
            to="/contact"
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box></Box>
          </Link>
        </Box>
      </Box>
      <Box sx={{ height: "200rem" }}>
        <AnimatedLines
          openEnter={openEnter}
          openLeave={openLeave}
          quickEnter={quickEnter}
          quickLeave={quickLeave}
        />
      </Box>
    </Box>
  );
}
