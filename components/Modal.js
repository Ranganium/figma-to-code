"use client";

import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
    >
      <span className={styles.accent} aria-hidden="true" />
      <h2 id="modal-title" className={styles.title}>
        Header
      </h2>
      <p id="modal-description" className={styles.description}>
        This is a very describing tekst string to show how it will look in a
        modal
      </p>
      <button
        type="button"
        className={styles.closeButton}
        aria-label="Luk modal"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
    </dialog>
  );
}
