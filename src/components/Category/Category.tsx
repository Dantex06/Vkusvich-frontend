import CategoryImage from "@/assets/images/category-example.png";

import styles from "./Category.module.scss";
import Image from "next/image";

export const Category = () => {
  return (
    <div className={styles.category}>
      <Image
        src={CategoryImage}
        alt={"category"}
        className={styles.categoryImage}
      />
      <p className={styles.categoryTitle}>Гамбургер</p>
    </div>
  );
};
