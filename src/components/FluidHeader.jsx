import { Box } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";
import { CursorContext } from "../helpers/CursorContext";
import React from "react";

export function FluidHeader() {
  const { projectEnter, projectLeave } = React.useContext(CursorContext);

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: "initial", sm: "1rem" },
        bottom: { xs: "1rem", sm: "initial" },
        width: "100%",
        left: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "40px",
          padding: ".5rem",
          background: "#1A73E8",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            gridTemplateColumns: "83fr 103fr 102fr",
            padding: ".5rem",
            zIndex: 1,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              id="selected"
              style={{
                background: "#fff",
                borderRadius: "40px",
                height: "36px",
                width: "30%",
                // gridColumn: "2 / span 1",
                position: "relative",
              }}
              initial={{}}
              animate={
                {
                  //gridColumn: ["1 / span 1", "2 / span 1"]
                  // left: ["20px", "40px"],
                }
              }
              layout
            ></motion.div>
          </AnimatePresence>
          <div></div>
        </Box>
        <Box
          sx={{
            display: "flex",
            "& > div": {
              padding: "6px 16px",
              borderRadius: "40px",
              zIndex: 2,
            },
          }}
        >
          <Box
            className="subtitle1"
            style={{
              color: "#1A73E8",
              //background: "#fff"
            }}
            // onMouseEnter={projectEnter}
            //onMouseLeave={projectLeave}
          >
            <p className="notranslate">Home</p>
          </Box>
          <Box className="subtitle1">
            <p className="notranslate">Projects</p>
          </Box>
          <Box className="subtitle1">
            <p className="notranslate">Contact</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
