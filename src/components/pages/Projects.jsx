import { CursorContextProvider } from "../CursorContext";
import { useCursorContext } from "../CursorContext";
import { Box as MuiBox } from "@mui/system";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigateButton } from "../NavigateButton";

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

function AnimatedProjectsTitle() {
  return (
    <Box sx={{ paddingTop: "80px", h1: { textAlign: "center" } }}>
      <motion.div
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            My next projects will always be
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            significantly better than these 2
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            side works
          </motion.h1>
        </div>
        <div>
          <motion.div
            variants={boxVariants}
            style={{
              width: "100px",
              background: "#ddd",
              position: "relative",
              display: "block",
            }}
          >
            Hello
          </motion.div>
        </div>
      </motion.div>
    </Box>
  );
}

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
        <AnimatedProjectsTitle />
        muhaha
      </Box>
    </Box>
  );
}
