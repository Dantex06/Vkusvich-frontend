import styles from "./News.module.scss";
import { NewsItem } from "@/components";

export const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.title}>
        <p className={styles.categoriesItem}>Самое интересное</p>
        <p className={styles.all}>Все</p>
      </div>
      <div className={styles.newsList}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </div>
  );
};
