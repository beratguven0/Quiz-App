"use client";

import React from "react";
import styles from "./styles.module.css";
import { AiOutlineClose } from "react-icons/ai";

import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { actions as modalActions, selectmodal } from "@/stores/modal-slice";

export default function Modal({ soru, soruDogru }) {
  const isModalOpen = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(modalActions.closeModal());
  };

  let control = [];
  soru.map((soru) => {
    control.push({
      id: soru.id,
      cevap: soruDogru[soru.id].reply == soru.question,
    });
  });

  let dogruSayac = 0;
  let yanlısSayac = 0;

  control.map((control) => {
    control.cevap == true ? dogruSayac++ : yanlısSayac++;
  });

  return (
    isModalOpen && (
      <motion.div
        className={styles.modalContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <button className={styles.close} onClick={handleCloseModal}>
              <AiOutlineClose />
            </button>
          </div>
          <div className={styles.modalcontent}>
            <p>Doğru sayısı:{dogruSayac}</p>
            <p>yanlış sayısı:{yanlısSayac}</p>
            <p>
              Boş soru sayısı:{soruDogru.length - (dogruSayac + yanlısSayac)}
            </p>
          </div>
          <div className={styles.modalFooter}>
            <p>Puan: {dogruSayac * 10}</p>
          </div>
        </div>
      </motion.div>
    )
  );
}
