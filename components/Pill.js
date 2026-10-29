import styles from "./Pill.module.css";

export default function Pill({ type, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.pill} ${type === "primary" ? styles.primary : styles.secondary}`}
      onClick={onClick}
    >
      Pill
    </button>
  );
}
