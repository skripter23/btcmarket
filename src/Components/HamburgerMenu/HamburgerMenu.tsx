import { FC, useState } from "react";
import styles from "../../Styles/HamburgerMenu/HamburgerMenu.module.scss";

interface IHamburgerMenu {}

const HamburgerMenu: FC<IHamburgerMenu> = ({}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <div onClick={() => setActive((prev) => !prev)} className={`${styles.hamburger} ${active && styles.active}`}>
        <div className={`${styles.line}`}></div>
        <div className={`${styles.line}`}></div>
        <div className={`${styles.line}`}></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
