import { configureStore } from "@reduxjs/toolkit";

import { reducer as quizReducer } from "./quiz-store";
import { reducer as modalReducer } from "./modal-slice";

export function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      quiz: quizReducer,
      modal: modalReducer,
    },
    preloadedState,
  });

  return store;
}
