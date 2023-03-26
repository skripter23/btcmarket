import { FC } from "react";
import HomepageMainInfo from "../../Components/HomepageMainInfo";
import Layout from "../../Components/Layout";

interface IHomepage {}

const Homepage: FC<IHomepage> = ({}) => {
  return (
    <Layout>
      <HomepageMainInfo />
    </Layout>
  );
};

export default Homepage;
