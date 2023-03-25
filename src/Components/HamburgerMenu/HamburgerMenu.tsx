import { motion } from "framer-motion";
import { FC, useState } from "react";
import styles from "../../Styles/HamburgerMenu/HamburgerMenu.module.scss";
import Button from "../Button";
import Navbar from "../Navbar";
import HamburgerPortal from "./HamburgerPortal";

interface IHamburgerMenu {}

const HamburgerMenu: FC<IHamburgerMenu> = ({}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <div onClick={() => setActive((prev) => !prev)} className={`${styles.hamburger} ${active && styles.active}`}>
        <div className={`${styles.line} ${active ? "bg-white" : "bg-black"}`}></div>
        <div className={`${styles.line} ${active ? "bg-white" : "bg-black"}`}></div>
        <div className={`${styles.line} ${active ? "bg-white" : "bg-black"}`}></div>
      </div>
      {active && (
        <HamburgerPortal>
          <motion.div
            initial={{
              translateY: -1000,
            }}
            animate={{
              translateY: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="absolute flex justify-center items-center overflow-hidden z-0 top-0 w-full h-full bg-black"
          >
            <div className="flex  flex-col items-center gap-5">
              <Navbar modal />
              <div className="h-full flex items-center gap-2">
                <Button text="Log in" modal />
                <Button text="Sign up" background modal />
              </div>
            </div>
          </motion.div>
        </HamburgerPortal>
      )}
    </div>
  );
};

export default HamburgerMenu;
