import React from "react";

import {motion} from 'framer-motion';
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Followers() {
  return (
    <>
      <motion.article
        className="followers--section"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="content" variants={item}>
          <h2>10k+</h2>
          <p>companies</p>
        </motion.div>
        <motion.div className="content" variants={item}>
          <h2> 314 </h2>
          <p>templates</p>
        </motion.div>
        <motion.div className="content" variants={item}>
          <h2> 12m+</h2>
          <p>queries</p>
        </motion.div>
      </motion.article>
    </>
  );
}

export { Followers };
