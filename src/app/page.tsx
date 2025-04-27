import {
  Categories,
  LastRecipes,
  News,
  Recommendations,
  Topic,
} from "@/widgets";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Topic />
      <Categories />
      <Recommendations />
      <News />
      <LastRecipes />
    </div>
  );
}
