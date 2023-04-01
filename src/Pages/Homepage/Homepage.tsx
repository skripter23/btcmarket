import { FC } from "react";
import HomepageMainInfo from "@Components/HomepageMainInfo";
import HomepageMarkets from "@Components/HomepageMarkets";
import Layout from "@Components/Layout";
import HomepageAbout from "@Components/HomepageAbout";
import HomepageAboutInfo from "../../Components/HomepageAboutInfo/HomepageAboutInfo";
import { AboutInfo, AboutInfoReverse, AboutInfoMain, AboutInfoMainReverse } from "../../data/mockData";

const Homepage: FC = () => {
  return (
    <Layout>
      <HomepageMainInfo />
      <HomepageMarkets />
      <HomepageAbout />
      <HomepageAboutInfo aboutInfo={AboutInfo} aboutInfoMain={AboutInfoMain} />
      <HomepageAboutInfo reverse aboutInfo={AboutInfoReverse} aboutInfoMain={AboutInfoMainReverse} />
    </Layout>
  );
};

export default Homepage;
