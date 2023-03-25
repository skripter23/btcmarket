import { FC } from "react";
import styles from "../../Styles/Button/Button.module.scss";

interface IButton {
  text: string;
  background?: boolean;
}

const Button: FC<IButton> = ({ text, background = false }) => {
  return (
    <button
      className={`${
        background ? "bg-backgroundButton" : styles.border
      } rounded-[4px] p-3 flex justify-center items-center text-[12px] text-center h-[33px]`}
    >
      {text}
    </button>
  );
};

export default Button;
