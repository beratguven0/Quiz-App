import QuizItems from "@/components/quizItems";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

const QuizContainer = ({ api }) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {api.map((quiz, index) => (
        <motion.div variants={item}>
          <QuizItems quiz={quiz} key={index} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default QuizContainer;
