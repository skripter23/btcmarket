import { FC } from "react";
import { createPortal } from "react-dom";

interface IHamburgerPortal {
  children: React.ReactNode;
}

const HamburgerPortal: FC<IHamburgerPortal> = ({ children }) => {
  return createPortal(children, document.body);
};

export default HamburgerPortal;
