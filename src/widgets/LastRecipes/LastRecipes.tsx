import styles from "./LastRecipes.module.scss";
import { Recipe } from "@/components";

export const LastRecipes = () => {
  return (
    <div className={styles.lastRecipes}>
      <div className={styles.title}>
        <p className={styles.categoriesItem}>Новые рецепты</p>
        <p className={styles.all}>Все</p>
      </div>
      <div className={styles.lastRecipesList}>
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
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
