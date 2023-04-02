import { FC } from "react";
import HomepageAboutInfoImage from "./HomepageAboutInfoImage/HomepageAboutInfoImage";
import HomepageAboutInfoText from "./HomepageAboutInfoText";
import { IAboutInfo } from "../../Types/IAboutInfo";

interface IHomepageAboutInfoDesktop {
  reverse?: boolean;
  aboutInfo: Array<IAboutInfo>;
  aboutInfoMain: {
    title: string;
    header: string;
  };
}

const HomepageAboutInfoDesktop: FC<IHomepageAboutInfoDesktop> = ({ reverse = false, aboutInfo, aboutInfoMain }) => {
  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 py-32">
      <div className=" mx-auto w-full max-w-tablet h-[414px] flex sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        {!reverse ? (
          <>
            <HomepageAboutInfoText aboutInfo={aboutInfo} aboutInfoMain={aboutInfoMain} />
            <HomepageAboutInfoImage />
          </>
        ) : (
          <>
            <HomepageAboutInfoImage reverse />
            <HomepageAboutInfoText aboutInfo={aboutInfo} aboutInfoMain={aboutInfoMain} />
          </>
        )}
      </div>
    </section>
  );
};

export default HomepageAboutInfoDesktop;
