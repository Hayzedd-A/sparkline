"use client";

import { motion, useAnimation } from "framer-motion";
import { JSX, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Animate = ({
  children,
  delay = 0,
}: {
  children: JSX.Element;
  delay?: number;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // triggers when 20% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};
export default Animate;
