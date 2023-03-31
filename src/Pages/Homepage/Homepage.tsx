import { FC } from "react";
import HomepageMainInfo from "../../Components/HomepageMainInfo";
import HomepageMarkets from "../../Components/HomepageMarkets";
import Layout from "../../Components/Layout";

interface IHomepage {}

const Homepage: FC<IHomepage> = ({}) => {
  return (
    <Layout>
      <HomepageMainInfo />
      <HomepageMarkets />
    </Layout>
  );
};

export default Homepage;
