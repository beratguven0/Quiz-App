import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz: [],
};

export const { reducer, actions } = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerCheck: (state, action) => {
      const { mainQuizId, id, question } = action.payload;
      const existingQuestionIndex = state.quiz.findIndex((q) => q.id === id);
      if (existingQuestionIndex !== -1) {
        state.quiz[existingQuestionIndex] = {
          ...state.quiz[existingQuestionIndex],
          QuizId: mainQuizId,
          question: question,
        };
      } else {
        const quiz = {
          QuizId: mainQuizId,
          id: id,
          question: question,
        };
        state.quiz = [quiz, ...state.quiz];
      }
    },
    deleteQuiz: (state, action) => {
      state.quiz = [];
    },
  },
});

export const selectquiz = ({ quiz }) => quiz.quiz;
