"use client";

import { useState } from "react";
import api from "../../../json/quiz.json";

import { useDispatch, useSelector } from "react-redux";
import { actions as quizActions, selectquiz } from "@/stores/quiz-store";
import { actions as modalActions, selectmodal } from "@/stores/modal-slice";

import styles from "./styles.module.css";
import Button from "@/components/button";
import ChaoiceControl from "@/components/chaoiceControl";
import Modal from "@/components/modal";

import { motion } from "framer-motion";

import { MdCelebration } from "react-icons/md";

export default function Page({ params }) {
  const dispatch = useDispatch();

  const quizData = useSelector(selectquiz);

  const [questionNumber, setQuestionNumber] = useState(0);

  let quiz = api.filter((quiz) => quiz.id == params.id);
  const question = quiz[0].question;

  const onceki = () => {
    if (questionNumber > 0 && questionNumber <= question.length - 1) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const sonraki = () => {
    if (questionNumber >= 0 && questionNumber < question.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  quizData.map((quizId) => {
    if (quizId.QuizId != params.id) {
      dispatch(quizActions.deleteQuiz());
    }
  });

  let quizControl;

  quizData.map((quiz) => {
    if (quiz.id == questionNumber && quiz.id != undefined) {
      quizControl = { id: quiz.id, question: quiz.question };
    }
  });

  const handleOpenModal = () => {
    dispatch(modalActions.openModal());
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.questionContainer}
    >
      <Modal soru={quizData} soruDogru={question} />

      <motion.div
        className={styles.quizContainer}
        key={questionNumber}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.question}>
          <p>
            {question.length}/{questionNumber + 1}
          </p>
        </div>
        <div className={styles.questionTitle}>
          <p>{question[questionNumber].questionTitle}</p>
        </div>
        <div className={styles.choices}>
          <ChaoiceControl
            choice={question[questionNumber].choice1}
            id={quiz[0].id}
            questionNumber={questionNumber}
            quizControl={quizControl}
          />
          <ChaoiceControl
            choice={question[questionNumber].choice2}
            id={quiz[0].id}
            questionNumber={questionNumber}
            quizControl={quizControl}
          />
          <ChaoiceControl
            choice={question[questionNumber].choice3}
            id={quiz[0].id}
            questionNumber={questionNumber}
            quizControl={quizControl}
          />
          <ChaoiceControl
            choice={question[questionNumber].choice4}
            id={quiz[0].id}
            questionNumber={questionNumber}
            quizControl={quizControl}
          />
        </div>
      </motion.div>
      <div className={styles.btnGrup}>
        <Button onClick={() => onceki()}>{"< Önceki Soru"}</Button>
        <p className={styles.numberQuestions}>{questionNumber + 1}</p>
        {questionNumber == question.length - 1 ? (
          <Button onClick={handleOpenModal}>
            Sonuc Göster <MdCelebration size={20} />
          </Button>
        ) : (
          <Button onClick={() => sonraki()}>{"Sonraki Soru >"}</Button>
        )}
      </div>
    </motion.div>
  );
}
