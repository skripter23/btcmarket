import { FC } from "react";
import { IAboutInfo } from "../../Types/IAboutInfo";
import { useMediaQuery } from "@mui/material";
import HomepageAboutInfoDesktop from "./HomepageAboutInfoDesktop";
import HomepageAboutInfoMobile from "./HomepageAboutInfoMobile";

interface IHomepageAboutInfo {
  reverse?: boolean;
  aboutInfo: Array<IAboutInfo>;
  aboutInfoMain: {
    title: string;
    header: string;
  };
}

const HomepageAboutInfo: FC<IHomepageAboutInfo> = ({ reverse = false, aboutInfo, aboutInfoMain }) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop ? (
    <HomepageAboutInfoDesktop reverse={reverse} aboutInfo={aboutInfo} aboutInfoMain={aboutInfoMain} />
  ) : (
    <HomepageAboutInfoMobile aboutInfo={aboutInfo} aboutInfoMain={aboutInfoMain} />
  );
};

export default HomepageAboutInfo;
