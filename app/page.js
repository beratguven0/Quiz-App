"use client";

import styles from "./page.module.css";
import { motion } from "framer-motion";
import api from "../json/quiz.json";
import QuizContainer from "@/components/quizContainer";
import Image from "next/image";
import quiz from "../assets/quiz.svg";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.main}
    >
      <div className={styles.pageMain}>
        <div className={styles.left}>
          <h1>Quiz App</h1>
          <p>
            Merhaba ve hoş geldiniz! Sizleri Quiz App'e beklerken heyecanla
            karşılıyoruz. Bu interaktif quiz uygulaması, oyun, bilim, yazılım ve
            mantıkla ilgili soruları içeriyor. Soruları çözerken hem keyifli
            vakit geçiriyor, hem de bilgi birikiminizi artırma fırsatı
            yakalıyorsunuz. Bu deneyimi yaşarken sınırlarınızı zorlayacak ve
            zihinsel yeteneklerinizi geliştireceksiniz. Hadi şimdi başlayalım ve
            bu eşsiz quiz deneyimine birlikte dalalım!
          </p>
        </div>
        <Image src={quiz} alt="" />
      </div>

      <div className={styles.quizTitle}>
        <div className={styles.title}>Quiz Questions</div>
        <div className={styles.border1}></div>
        <div className={styles.border2}></div>
      </div>

      <QuizContainer api={api} />
    </motion.main>
  );
}
