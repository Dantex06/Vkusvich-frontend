import styles from "./styles.module.scss";
import { InputType } from "@/components/UI-kit/Input/types";

export const Input = (props: InputType) => {
  const { label, errormessage } = props;
  return (
    <div className={styles.inputBlock}>
      {label && <p className={styles.label}>{label}</p>}
      <input className={styles.input} {...props} />
      {errormessage && <p className={styles.errorMessage}>{errormessage}</p>}
    </div>
  );
};
