import { motion } from "framer-motion";
import { FC, ReactElement } from "react";

interface AnimatedPageProps {
  children: ReactElement;
}

const AnimatedPage: FC<AnimatedPageProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
