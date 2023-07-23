import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const { reducer, actions } = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
  },
});

export const selectmodal = ({ modal }) => modal.modal;
