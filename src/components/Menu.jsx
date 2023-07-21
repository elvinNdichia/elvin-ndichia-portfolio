import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// The animation variants
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const listItemVariants = {
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  closed: { y: 50, opacity: 0 },
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Button</button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
            >
              {items.map((item, i) => (
                <motion.li key={item} custom={i} variants={listItemVariants}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div style={{ height: "500px" }} />
    </>
  );
};

export default Menu;
