import styles from "./Categories.module.scss";
import { Category } from "@/components";

export const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.title}>
        <p className={styles.categoriesItem}>Категории</p>
        <p className={styles.all}>Все</p>
      </div>
      <div className={styles.categoriesList}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};
