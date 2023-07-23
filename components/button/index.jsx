import styles from "./styles.module.css";

export default function Button({ children, variant = "button", ...props }) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
