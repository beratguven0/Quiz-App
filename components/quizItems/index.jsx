"use client";
import Link from "next/link";

import styles from "./styles.module.css";

export default function QuizItems({ quiz }) {
  return (
    <div className={styles.quiz}>
      <Link href={`quiz/${quiz.id}`}>
        <div className={styles.difficulty}>{quiz.difficulty}</div>
        <div className={styles.quizCard}>
          <img src={quiz.img} className={styles.cardImg} />
          <div className={styles.cardAbout}>
            <p>{quiz.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
