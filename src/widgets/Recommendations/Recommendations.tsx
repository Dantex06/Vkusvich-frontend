import { Recipe } from "@/components";

import LoveIcon from "@/assets/icons/Love.svg";

import styles from "./Recommendations.module.scss";

export const Recommendations = () => {
  return (
    <div className={styles.recommendations}>
      <div className={styles.title}>
        <div className={styles.titleText}>
          <p className={styles.categoriesItem}>Рекоммендации для тебя</p>
          <LoveIcon />
        </div>
        <p className={styles.all}>Все</p>
      </div>
      <div className={styles.recommendationList}>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
};
