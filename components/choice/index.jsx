import styles from "./styles.module.css";

export default function Choice({ children, Active = false, ...props }) {
  return (
    <button {...props} className={Active ? styles.choiceActive : styles.choice}>
      {children}
    </button>
  );
}
