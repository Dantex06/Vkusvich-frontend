import NewsImage from "@/assets/images/news-example.png";
import styles from "./NewsItem.module.scss";
import Image from "next/image";

export const NewsItem = () => {
  return (
    <div className={styles.newsItem}>
      <Image src={NewsImage} alt="news" className={styles.newsImage} />
      <div className={styles.info}>
        <p className={styles.title}>Какие супы приготовить весной</p>
        <p className={styles.description}>
          Весной особенно важно добавлять в рацион больше овощей и зелени — они
          богаты витаминами, которые поддерживают иммунитет...
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
