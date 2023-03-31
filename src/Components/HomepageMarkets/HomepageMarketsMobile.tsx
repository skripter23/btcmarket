import { FC } from "react";
import styles from "../../Styles/HomepageMarkets/HomepageMarkets.module.scss";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TableBodyData } from "../../data/mockData";
import Button from "../Button/Button";
import RightArrowIcon from "../../Assets/RightArrow.png";

const HomepageMarketsMobile: FC = ({}) => {
  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 pb-32">
      <div className=" mx-auto w-full max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop pt-8">
        <div className="w-full flex justify-center items-center gap-8">
          <span className={`${styles.hover} text-[14px] text-center`}>Most Popular</span>
          <span className={`${styles.hover} text-[14px] text-center`}>Top Movers</span>
        </div>
        <div className="flex flex-col justify-center items-center pt-6">
          {(TableBodyData || []).map((item) => {
            return (
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <div className=" flex w-full items-center gap-3">
                    <img src={item.image as string} alt="Icon" />
                    <span>{item.name}</span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className=" min-w-[250px] sm:min-w-[375px] w-full flex sm:justify-center">
                    <span className="text-[15px] pr-1 text-black">Last Price: {item.price}</span>
                    <span className="text-[14px] text-backgroundGray">AUD</span>
                  </div>
                  <div className=" min-w-[250px] sm:min-w-[375px] w-full flex sm:justify-center">
                    <span className="pr-1">24hr change:</span>
                    <span className={`${item.change >= 0 ? "text-tableGreen" : "text-tableRed"}`}>{item.change}%</span>
                  </div>
                  <div className=" min-w-[250px] sm:min-w-[375px] w-full flex sm:justify-center">
                    <span className="text-[16px] text-center">Market cap: {item.market_cap}</span>
                  </div>
                  <div className=" min-w-[250px] sm:min-w-[375px] pt-4 w-full flex sm:justify-center">
                    <Button text="Buy" background />
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
          <div className={`${styles.hover} flex justify-center items-center gap-3 pt-6`}>
            <span>View all markets</span>
            <img src={RightArrowIcon} alt="Icon" width={20} height={12} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageMarketsMobile;
