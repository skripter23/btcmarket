import { useMediaQuery } from "@mui/material";
import { FC } from "react";
import HomepageMainInfoDesktop from "./HomepageMainInfoDesktop";
import HomepageMainInfoMobile from "./HomepageMainInfoMobile";

const HomepageMainInfo: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop ? <HomepageMainInfoDesktop /> : <HomepageMainInfoMobile />;
};

export default HomepageMainInfo;
