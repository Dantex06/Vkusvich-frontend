import { ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonTypes {
  primary = "primary",
  outline = "outline",
}

export type ButtonType = {
  className?: string;
  children?: React.ReactNode;
  size: ButtonSize;
  styleType: ButtonTypes;
} & ButtonHTMLAttributes<HTMLButtonElement>;
