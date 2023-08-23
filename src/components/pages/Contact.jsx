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

const AnimatedLines = ({ openEnter, openLeave, quickEnter, quickLeave }) => {
  return (
    <Box sx={{ paddingTop: "80px", ".h1": { textAlign: "center" } }}>
      <motion.div
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            Tell me how I can help you
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            make the world a little
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            better
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
              <NavigateButton location="Home" link="/" />
            </div>
          </motion.div>
        </div>
        <Box
          sx={{
            position: "fixed",
            bottom: "-150px",
            right: "-50px",
          }}
        >
          <motion.div variants={imageVariants}>
            <Box component="img" sx={{ width: "250px" }} src="wave-hand.png" />
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export function Contact() {
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
      <Box
        sx={{
          width: "100vw",
          height: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <AnimatedLines
            openEnter={openEnter}
            openLeave={openLeave}
            quickEnter={quickEnter}
            quickLeave={quickLeave}
          />
        </Box>
      </Box>
    </Box>
  );
}
