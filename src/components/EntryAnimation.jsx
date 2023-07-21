import { Box } from "@mui/material";
import { motion } from "framer-motion";

export function EntryAnimation() {
  const lineContainerVariants = {
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.5,
        staggerChildren: 0.04,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  const lineVariants = {
    visible: { height: "100%", transition: { duration: 0.5 } },
    hidden: { height: "2px", transition: { duration: 6 } },
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        className="lines-container"
        initial="hidden"
        animate="visible"
        variants={lineContainerVariants}
      >
        {Array.from(Array(13)).map((_, index) => (
          <motion.div
            key={index}
            className="line background-line"
            style={{ background: "#ddd", width: "1px", height: "100%" }}
            variants={lineVariants}
          />
        ))}
      </motion.div>
    </Box>
  );
}
