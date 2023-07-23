"use client";

import api from "../../json/quiz.json";
import QuizContainer from "@/components/quizContainer";

export default function Path({ params }) {
  let apiControl = [];
  api.map((api) => {
    api.categories == params.path && apiControl.push(api);
  });
  return (
    <div>
      <QuizContainer api={apiControl} />
    </div>
  );
}
