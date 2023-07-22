import { Box } from "@mui/system";
import { motion } from "framer-motion";

export function FluidHeader() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "1rem",
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
            display: "grid",
            gridTemplateColumns: "83fr 103fr 102fr",
            padding: ".5rem",
          }}
        >
          <div></div>
          <motion.div
            style={{
              background: "#fff",
              borderRadius: "40px",
            }}
          ></motion.div>
          <div></div>
        </Box>
        <Box
          sx={{
            display: "flex",
            "& > div": {
              padding: "6px 16px",
              borderRadius: "40px",
            },
          }}
        >
          <Box
            className="subtitle1"
            style={{
              color: "#1A73E8",
              //background: "#fff"
            }}
          >
            Home
          </Box>
          <Box className="subtitle1">Projects</Box>
          <Box className="subtitle1">Contact</Box>
        </Box>
      </Box>
    </Box>
  );
}
