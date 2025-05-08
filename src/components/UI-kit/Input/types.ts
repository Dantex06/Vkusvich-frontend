import { InputHTMLAttributes } from "react";

export type InputType = {
  type: string;
  placeholder: string;
  label?: string;
  errormessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;
