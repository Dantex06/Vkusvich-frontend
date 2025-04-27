import TopicImage from "@/assets/images/top-example.png";
import LeftArrow from "@/assets/icons/LeftArrow.svg";
import RightArrow from "@/assets/icons/RightArrow.svg";
import SmallLeftArrow from "@/assets/icons/SmallLeftArrow.svg";
import SmallRightArrow from "@/assets/icons/SmallRightArrow.svg";
import styles from "./Topic.module.scss";
import Image from "next/image";

export const Topic = () => {
  return (
    <div className={styles.topic}>
      <div className={styles.buttons}>
        <div className={styles.leftButton}>
          <div className={styles.defaultButton}>
            <LeftArrow />
          </div>
          <div className={styles.smallButton}>
            <SmallLeftArrow />
          </div>
        </div>
        <div className={styles.rightButton}>
          <div className={styles.defaultButton}>
            <RightArrow />
          </div>
          <div className={styles.smallButton}>
            <SmallRightArrow />
          </div>
        </div>
      </div>
      <div className={styles.itemInfo}>
        <p className={styles.recommendScore}>
          <span className={styles.extra}>85%</span> рекомендуют это снова
        </p>
        <p className={styles.title}>Фруктовые галлеты с персиками</p>
      </div>
      <Image src={TopicImage} alt="top-image" className={styles.image} />
    </div>
  );
};
