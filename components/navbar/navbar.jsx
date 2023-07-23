"use client";

import Link from "next/link";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

import styles from "./styles.module.css";

export const categoriesItems = [
  {
    name: "Yazilim",
  },
  {
    name: "Bilim",
  },
  {
    name: "Oyun",
  },
  {
    name: "Mantik",
  },
];

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.logo} href="/">
        Quiz
      </Link>
      <div className={styles.categories}>
        {categoriesItems.map((cat, i) => (
          <CategoriesItem key={i} name={cat.name} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
