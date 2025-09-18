import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

export default function ScaleComponent({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px 0px -80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
    >
      {children}
    </motion.div>
  );
}
