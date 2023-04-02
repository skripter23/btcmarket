import { FC } from "react";
import { IAboutInfo } from "../../Types/IAboutInfo";
import HomepageAboutInfoText from "./HomepageAboutInfoText";
import HomepageAboutInfoImage from "./HomepageAboutInfoImage";

interface IHomepageAboutInfoMobile {
  aboutInfo: Array<IAboutInfo>;
  aboutInfoMain: {
    title: string;
    header: string;
  };
}

const HomepageAboutInfoMobile: FC<IHomepageAboutInfoMobile> = ({ aboutInfo, aboutInfoMain }) => {
  return (
    <>
      <HomepageAboutInfoText aboutInfo={aboutInfo} aboutInfoMain={aboutInfoMain} />
      <HomepageAboutInfoImage />
    </>
  );
};

export default HomepageAboutInfoMobile;
