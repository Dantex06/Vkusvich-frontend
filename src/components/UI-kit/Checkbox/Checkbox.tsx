import { CheckboxProps } from "@/components/UI-kit/Checkbox/types";

import styles from "./styles.module.scss";

export const Checkbox = ({ title }: CheckboxProps) => {
  return (
    <div className={styles.checkboxBlock}>
      <input
        className={styles.checkbox}
        type="checkbox"
        defaultChecked={true}
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
