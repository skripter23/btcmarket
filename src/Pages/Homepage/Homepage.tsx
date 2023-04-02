import { FC } from "react";
import HomepageMainInfo from "@Components/HomepageMainInfo";
import HomepageMarkets from "@Components/HomepageMarkets";
import Layout from "@Components/Layout";
import HomepageAbout from "@Components/HomepageAbout";
import HomepageAboutInfo from "@Components/HomepageAboutInfo/HomepageAboutInfo";
import { AboutInfo, AboutInfoReverse, AboutInfoMain, AboutInfoMainReverse } from "../../data/mockData";
import HomepageVipProgram from "@Components/HomepageVipProgram";
import HomepageTrading from "@Components/HomepageTrading";
import HomepageTradeContinue from "@Components/HomepageTradeContinue";
import HomepageLastNews from "@Components/HomepageLastNews";
import HomepageCreateAccount from "@Components/HomepageCreateAccount/HomepageCreateAccount";

const Homepage: FC = () => {
  return (
    <Layout>
      <HomepageMainInfo />
      <HomepageMarkets />
      <HomepageAbout />
      <HomepageAboutInfo aboutInfo={AboutInfo} aboutInfoMain={AboutInfoMain} />
      <HomepageAboutInfo reverse aboutInfo={AboutInfoReverse} aboutInfoMain={AboutInfoMainReverse} />
      <HomepageVipProgram />
      <HomepageTrading />
      <HomepageTradeContinue />
      <HomepageLastNews />
      <HomepageCreateAccount />
    </Layout>
  );
};

export default Homepage;
