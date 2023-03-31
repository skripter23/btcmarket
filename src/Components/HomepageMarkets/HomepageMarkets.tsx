import { useMediaQuery } from "@mui/material";
import { FC } from "react";
import HomepageMarketsDesktop from "./HomepageMarketsDesktop";
import HomepageMarketsMobile from "./HomepageMarketsMobile";

const HomepageMarkets: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return isDesktop ? <HomepageMarketsDesktop /> : <HomepageMarketsMobile />;
};

export default HomepageMarkets;
