import { FC } from "react";
import { NavBarItems } from "../../data/mockData";
import ArrowDownIcon from "../../Icons/ArrowDownIcon";

const Navbar: FC = ({}) => {
  return (
    <nav className="h-full flex items-center gap-8">
      {(NavBarItems || []).map((item) => {
        return (
          <div key={item.id} className="flex items-center gap-2">
            <span>{item.title}</span>
            <ArrowDownIcon />
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
