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
    <Box sx={{ paddingTop: "80px", ".home-h1": { textAlign: "center" } }}>
      <motion.div
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              Hi, I am Elvin. A Frontend
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              Hi, I am Elvin. A Frontend
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              developer who turns complex
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              developer who turns
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              designs into clean, user-friendly
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              complex designs into clean,
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              interfaces. I’m{" "}
              <a
                onMouseEnter={quickEnter}
                onMouseLeave={quickLeave}
                style={{ textDecoration: "underline" }}
              >
                quick
              </a>{" "}
              but I don’t
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              user-friendly interfaces. I’m
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              let a single detail slip thanks to
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <a style={{ textDecoration: "underline" }}>quick</a> but I don’t
              let a
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              my background in UX Design and
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              single detail slip thanks to
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              deep knowledge on Frontend
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              my background in UX
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              technologies, particularly React
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              Design and deep knowledge
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}>ecosystem</Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              on Frontend technologies,
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}></Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              particularly React
            </Box>
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="home-h1">
            <Box sx={{ display: { xs: "none", md: "block" } }}></Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>ecosystem</Box>
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
              <NavigateButton location="Projects" link="/projects" />
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
            <Box component="img" sx={{ width: "300px" }} src="hello-hand.png" />
          </motion.div>
        </Box>
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
        </Box>
      </Box>
    </Box>
  );
}
