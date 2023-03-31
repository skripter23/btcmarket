import { FC } from "react";
import HomepageMainInfo from "../../Components/HomepageMainInfo";
import HomepageMarkets from "../../Components/HomepageMarkets";
import Layout from "../../Components/Layout";
import HomepageAbout from "../../Components/HomepageAbout/HomepageAbout";

const Homepage: FC = () => {
  return (
    <Layout>
      <HomepageMainInfo />
      <HomepageMarkets />
      <HomepageAbout />
    </Layout>
  );
};

export default Homepage;
