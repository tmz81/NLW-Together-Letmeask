import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function ButtonComponent({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonStyle className={`${isOutlined ? "outlined" : ""}`} {...props} />
  );
}
