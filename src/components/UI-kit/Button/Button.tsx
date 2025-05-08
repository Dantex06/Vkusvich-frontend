import styles from "./styles.module.scss";
import {
  ButtonSize,
  ButtonType,
  ButtonTypes,
} from "@/components/UI-kit/Button/type";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const styleTypeMap = {
  [ButtonTypes.primary]: styles.primary,
  [ButtonTypes.outline]: styles.outline,
};

const sizeMap = {
  [ButtonSize.small]: styles.small,
  [ButtonSize.medium]: styles.medium,
  [ButtonSize.large]: styles.large,
};

export const Button = ({
  className,
  size = ButtonSize.medium,
  styleType = ButtonTypes.outline,
  children,
  ...props
}: PropsWithChildren<ButtonType>) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        styles.button,
        styleTypeMap[styleType],
        sizeMap[size]
      )}
    >
      {children}
    </button>
  );
};
