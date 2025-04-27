import Image from "next/image";

import RecommendationImage from "@/assets/images/recommendation-example.jpg";
import Like from "@/assets/icons/Like.svg";
import Star from "@/assets/icons/Star.svg";
import Ruble from "@/assets/icons/Ruble.svg";
import Clock from "@/assets/icons/Clock.svg";
import SmallLike from "@/assets/icons/SmallLike.svg";
import SmallStar from "@/assets/icons/SmallStar.svg";
import SmallRuble from "@/assets/icons/SmallRuble.svg";
import SmallClock from "@/assets/icons/SmallClock.svg";
import styles from "./Recipe.module.scss";

export const Recipe = () => {
  return (
    <div className={styles.recipe}>
      <Image
        src={RecommendationImage}
        alt="recommendation"
        className={styles.recommendImage}
      />
      <p className={styles.title}>Пицца с курицей</p>
      <p className={styles.ingredients}>Курица - Тесто - Лук - Гранат</p>
      <div className={styles.addition}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div className={styles.defaultIcon}>
              <Star />
            </div>
            <div className={styles.smallIcon}>
              <SmallStar />
            </div>
            <p>4.7</p>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.defaultIcon}>
              <Ruble />
            </div>
            <div className={styles.smallIcon}>
              <SmallRuble />
            </div>
            <p>1500</p>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.defaultIcon}>
              <Clock />
            </div>
            <div className={styles.smallIcon}>
              <SmallClock />
            </div>
            <p>20 мин</p>
          </div>
        </div>
        <div className={styles.defaultIcon}>
          <Like />
        </div>
        <div className={styles.smallIcon}>
          <SmallLike />
        </div>
      </div>
    </div>
  );
};
