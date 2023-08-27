import { CursorContextProvider } from "../CursorContext";
import { useCursorContext } from "../CursorContext";
import { Box as MuiBox } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  htmlSVG,
  cssSVG,
  javascriptSVG,
  reactSVG,
  muiSVG,
  reactRouterSVG,
  framerSVG,
  firebaseSVG,
  figmaSVG,
} from "../svgLogos";
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
const projectVariants = {
  hidden: { top: "40px", opacity: 0 },
  visible: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const AnimatedLines = ({ openEnter, openLeave, quickEnter, quickLeave }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const [thingBeingHovered, setThingBeingHovered] = useState("");

  const getOpacity = (hoverKey) => {
    return thingBeingHovered === hoverKey || thingBeingHovered === "" ? 1 : 0.5;
  };

  let containerPadding = "0 16px";
  if (isTablet) containerPadding = "0 32px";
  if (isLaptop) containerPadding = "0 64px";

  return (
    <>
      {/* Mobile Below */}
      <Box
        sx={{
          padding: containerPadding,
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
          <a
            href="https://enco-learn.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box
              sx={{
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                position: "relative",
              }}
            >
              <motion.div
                variants={projectVariants}
                style={{
                  position: "relative",
                  display: "block",
                  marginTop: "14px",
                }}
              >
                <Box
                  sx={{ maxWidth: "100%", borderRadius: "4px" }}
                  component="img"
                  src="app-test.png"
                />
              </motion.div>
              <div style={{ marginLeft: "16px", paddingTop: "1rem" }}>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                    }}
                  >
                    <h2 className="h2">Notes</h2>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                      marginTop: "10px",
                    }}
                  >
                    <p className="body1">
                      A note taking app that demonstrates my ability to
                      implement advanced micro interactions. You can try out
                      deleting and searching
                    </p>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden", marginTop: "10px" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                    }}
                  >
                    <Chip svg={htmlSVG} label="HTML" />
                    <Chip svg={cssSVG} label="CSS" />
                    <Chip svg={javascriptSVG} label="JavaScript" />
                    <Chip svg={reactSVG} label="React" />
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                    }}
                  >
                    <Chip svg={muiSVG} label="MUI" />
                    <Chip svg={reactRouterSVG} label="React Router" />
                    <Chip svg={framerSVG} label="Framer Motion" />
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                    }}
                  >
                    <Chip svg={firebaseSVG} label="Firebase" />
                    <Chip svg={figmaSVG} label="Figma" />
                  </motion.div>
                </div>
              </div>
            </Box>
          </a>
          <Box sx={{ marginTop: { xs: "32px", md: "124px" } }} />
          <a
            href="https://voila-elvin-ndichia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box
              sx={{
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                position: "relative",
              }}
            >
              <motion.div
                variants={projectVariants}
                style={{
                  position: "relative",
                  display: "block",
                  marginTop: "14px",
                }}
              >
                <Box
                  sx={{ maxWidth: "100%", borderRadius: "4px" }}
                  component="img"
                  src="app-test.png"
                />
              </motion.div>
              <div style={{ marginLeft: "16px", paddingTop: "1rem" }}>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                    }}
                  >
                    <h2 className="h2">Voila.</h2>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                      marginTop: "10px",
                    }}
                  >
                    <p className="body1">
                      A landing page that demonstrates my ability to implement
                      advanced scroll animations
                    </p>
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden", marginTop: "10px" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                    }}
                  >
                    <Chip svg={htmlSVG} label="HTML" />
                    <Chip svg={cssSVG} label="CSS" />
                    <Chip svg={javascriptSVG} label="JavaScript" />
                    <Chip svg={reactSVG} label="React" />
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                    }}
                  >
                    <Chip svg={muiSVG} label="MUI" />
                    <Chip svg={framerSVG} label="Framer Motion" />
                    <Chip svg={firebaseSVG} label="Firebase" />
                  </motion.div>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={boxVariants}
                    style={{
                      position: "relative",
                      display: "block",
                      maxWidth: "600px",
                    }}
                  >
                    <Chip svg={figmaSVG} label="Figma" />
                  </motion.div>
                </div>
              </div>
            </Box>
          </a>
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

function Chip({ svg, label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "11px 16px",
        background: "#eee",
        borderRadius: "50px",
        marginRight: "8px",
        marginTop: "8px",
      }}
    >
      <div
        style={{ marginRight: "10px", display: "flex", alignItems: "center" }}
      >
        {svg}
      </div>
      <p style={{ color: "rgba(0, 0, 0, 60)" }} className="body1">
        {label}
      </p>
    </div>
  );
}
