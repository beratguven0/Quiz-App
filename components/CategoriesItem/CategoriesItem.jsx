"use client";

import Link from "next/link";
import styles from "./styles.module.css";

const CategoriesItem = ({ name }) => {
  return (
    <Link href={"/" + name.toLowerCase()}>
      <div className={styles.CategoriesItem}>
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default CategoriesItem;
