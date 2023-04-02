import { FC } from "react";
import Button from "../Button/Button";
import { ButtonText, VipProgram } from "../../data/mockData";
import VipProgramImage from "@Assets/VipProgramImage.png";

const HomepageVipProgram: FC = () => {
  return (
    <>
      <section className="w-full px-6 lg:px-20 xl:px-40 md:pt-32  pb-8 md:pb-20">
        <div className=" mx-auto w-full flex flex-col gap-8 justify-center items-center max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
          <span className="text-15px">{VipProgram.title}</span>
          <h1 className="text-[40px] max-w-[527px] w-full text-center">{VipProgram.header}</h1>
          <span className="text-center">{VipProgram.description}</span>
          <div className="flex flex-col md:flex-row md:gap-24">
            {(VipProgram.parts || []).map((item, i) => {
              return (
                <div key={i} className="flex gap-1 items-center justify-center md:justify-start">
                  <img src={item.image} alt="Icon" />
                  <span>{item.description}</span>
                </div>
              );
            })}
          </div>
          <Button text={ButtonText.vipProgram.more} />
        </div>
      </section>
      <img src={VipProgramImage} alt="Image" className="w-full" />
    </>
  );
};

export default HomepageVipProgram;
