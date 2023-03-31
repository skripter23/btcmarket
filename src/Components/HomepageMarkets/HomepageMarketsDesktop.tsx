import { FC } from "react";
import styles from "../../Styles/HomepageMarkets/HomepageMarkets.module.scss";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import { TableBodyData } from "../../data/mockData";
import TableStyles from "../../Styles/Table/Table.module.scss";
import XRPIcon from "../../Assets/XRPICon.png";
import BitcoinIсon from "../../Assets/BitcoinIcon.png";
import EthereumIcon from "../../Assets/EthereumIcon.png";
import TetherIcon from "../../Assets/TetherIcon.png";
import RightArrowIcon from "../../Assets/RightArrow.png";

const HomepageMarketsDesktop: FC = () => {
  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 pb-32">
      <div className=" mx-auto w-full max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <div className="w-full flex justify-center items-center gap-8">
          <span className={`${styles.hover} text-[14px] text-center`}>Most Popular</span>
          <span className={`${styles.hover} text-[14px] text-center`}>Top Movers</span>
        </div>
        <div className="w-full pt-8">
          <table className="w-full">
            <thead>
              <TableHead headers={["Asset", "Last Price", "24hr Change", "Market Cap"]} />
            </thead>
            <tbody className="w-full">
              <TableBody bodyData={TableBodyData} />
            </tbody>
          </table>
          <div className={`${TableStyles.tableHead} p-3 w-full flex justify-center items-center relative`}>
            <div className="absolute left-[39%] lg:left-[41%]">
              <img src={BitcoinIсon} alt="Icon" width={24} height={24} />
            </div>
            <div className="absolute left-[38%] lg:left-[40%]">
              <img src={EthereumIcon} alt="Icon" width={24} height={24} />
            </div>
            <div className="absolute left-[37%] lg:left-[39%]">
              <img src={TetherIcon} alt="Icon" width={24} height={24} />
            </div>
            <div className="absolute left-[36%] lg:left-[38%]">
              <img src={XRPIcon} alt="Icon" width={24} height={24} />
            </div>
            <div className={`${styles.hover} flex justify-center items-center gap-3`}>
              <span>View all markets</span>
              <img src={RightArrowIcon} alt="Icon" width={20} height={12} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageMarketsDesktop;
