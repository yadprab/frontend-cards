import React from "react";
import { Followers } from "./Followers";
import {motion} from 'framer-motion';
function Text() {
  return (
    <>
      <section className="text--section">
        <article className="main--title">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Get <span>insights</span> that help your business grow.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </motion.p>
        </article>
        <Followers />
      </section>
    </>
  );
}

export { Text };
