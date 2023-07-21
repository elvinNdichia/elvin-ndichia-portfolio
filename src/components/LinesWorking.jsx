import { Box } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function EntryAnimation() {
  const lineContainerVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const lineVariants = {
    visible: { height: "100%", transition: { duration: 1 } },
    hidden: { height: "2px", transition: { duration: 0.5 } },
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <motion.div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100vh",
          width: "100%",
          maxWidth: "1100px",
        }}
        initial="hidden"
        animate="visible"
        variants={lineContainerVariants}
      >
        {Array.from(Array(13)).map((_, index) => {
          const controls = useAnimation();

          useEffect(() => {
            setTimeout(() => {
              controls.start("visible");
            }, index * 50);
          }, [controls, index]);

          return (
            <motion.div
              key={index}
              className="line"
              style={{ background: "#ddd", width: "1px", height: "100%" }}
              initial="hidden"
              animate={controls}
              variants={lineVariants}
            />
          );
        })}
      </motion.div>
    </Box>
  );
}
