import { FC } from "react";
import { NavBarItems } from "../../data/mockData";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";

interface INavBar {
  modal?: boolean;
}

const Navbar: FC<INavBar> = ({ modal = false }) => {
  return (
    <nav className={`h-full flex ${modal ? "flex-col gap-3" : "gap-8"} items-center`}>
      {(NavBarItems || []).map((item) => {
        return (
          <div key={item.id} className="flex text-left cursor-pointer justify-start items-center gap-2">
            <span className={modal ? "text-white" : ""}>{item.title}</span>
            {!modal && <ArrowDownIcon />}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
