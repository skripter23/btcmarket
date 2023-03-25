import { FC } from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
import LogoIcon from "../../Icons/LogoIcon";
import Button from "../Button";
import HamburgerMenu from "../HamburgerMenu";

import Navbar from "../Navbar";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <main>
      <header className="w-full min-h-[100px] flex justify-center px-6 lg:px-20 xl:px-40">
        <div className="w-full flex items-center justify-between max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
          <LogoIcon />
          {isDesktop ? (
            <div className="flex items-center gap-5">
              <Navbar />
              <div className="h-full flex items-center gap-2">
                <Button text="Log in" />
                <Button text="Sign up" background />
              </div>
            </div>
          ) : (
            <HamburgerMenu />
          )}
        </div>
      </header>
      {children}
      <footer></footer>
    </main>
  );
};

export default Layout;
