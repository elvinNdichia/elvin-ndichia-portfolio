import { CursorContextProvider } from "../CursorContext";
import { useCursorContext } from "../CursorContext";
import { Box as MuiBox } from "@mui/system";

import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation, Link } from "react-router-dom";
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
  hidden: { height: "0px" },
  visible: {
    height: "100px",
    transition: {
      duration: 0.5,
    },
  },
};

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
            Hi, I am Elvin. A Frontend
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            developer who turns complex
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            designs into clean, user-friendly
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            interfaces. I’m{" "}
            <a
              onMouseEnter={quickEnter}
              onMouseLeave={quickLeave}
              style={{ textDecoration: "underline" }}
            >
              quick
            </a>{" "}
            but I don’t
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            let a single detail slip thanks to
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            my background in UX design and
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            deep knowledge on Frontend
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            technologies, particularly React
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            ecosystem
          </motion.h1>
        </div>
      </motion.div>
    </Box>
  );
};

export function Home() {
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
          <Box>
            <NavigateButton location="Projects" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
