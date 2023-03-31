import { FC } from "react";
import styles from "@Styles/Button/Button.module.scss";

interface IButton {
  text: string;
  background?: boolean;
  modal?: boolean;
}

const Button: FC<IButton> = ({ text, background = false, modal = false }) => {
  return (
    <button
      className={`${background ? "bg-backgroundButton hover:bg-backgroundButtonHover duration-300 hover:text-white" : styles.border} ${
        modal ? "text-white" : ""
      } rounded-[4px] p-3 flex justify-center items-center text-[12px] text-center h-[33px]`}
    >
      {text}
    </button>
  );
};

export default Button;
