import Choice from "../choice";

import { useDispatch } from "react-redux";
import { actions as quizActions } from "@/stores/quiz-store";

export default function ChaoiceControl({
  quizControl,
  questionNumber,
  id,
  choice,
}) {
  const dispatch = useDispatch();
  const handleAnswer = (mainQuizId, id, question) => {
    dispatch(quizActions.answerCheck({ mainQuizId, id, question }));
  };
  return (
    <>
      {quizControl == undefined ? (
        <Choice onClick={() => handleAnswer(id, questionNumber, choice)}>
          {choice}
        </Choice>
      ) : quizControl.id == questionNumber && quizControl.question == choice ? (
        <Choice Active={true}>{choice}</Choice>
      ) : (
        <Choice onClick={() => handleAnswer(id, questionNumber, choice)}>
          {choice}
        </Choice>
      )}
    </>
  );
}
