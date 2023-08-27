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
    <Box sx={{ h1: { textAlign: "center" } }}>
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
        width: "90vw",
      }}
    >
      <Box sx={{ height: "200vh", background: "#eee" }}>
        <AnimatedProjectsTitle />
        muhaha
      </Box>
    </Box>
  );
}
