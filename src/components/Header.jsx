import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/system";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Menu() {
  const [selected, setSelected] = useState("Home");

  const handleClick = (menuItem) => {
    setSelected(menuItem);
  };

  const items = ["Home", "Projects", "Contact"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#140F37",
        borderRadius: "22px",
        padding: "4px",
        height: "44px",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          onClick={() => handleClick(item)}
          sx={{
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: "12px",
            background: item === selected ? "#fff" : "transparent",
            color: item === selected ? "#140F37" : "#fff",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {item === selected && (
              <motion.div
                key={item}
                variants={variants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  borderRadius: "12px",
                  background: "#fff",
                }}
              />
            )}
          </AnimatePresence>
          {item}
        </Box>
      ))}
    </Box>
  );
}

export function Header() {
  return <Menu />;
}
