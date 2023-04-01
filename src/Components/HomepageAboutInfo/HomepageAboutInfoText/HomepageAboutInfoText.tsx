import { FC } from "react";
import { IAboutInfo } from "../../../Types/IAboutInfo";
import HomepageAboutInfoTextItem from "./HomepageAboutInfoTextItem";

interface IHomepageAboutInfoText {
  aboutInfo: Array<IAboutInfo>;
  aboutInfoMain: {
    title: string;
    header: string;
  };
}

const HomepageAboutInfoText: FC<IHomepageAboutInfoText> = ({ aboutInfo, aboutInfoMain }) => {
  return (
    <div className="w-full min-h-[414px] flex flex-col gap-8">
      <div>
        <span className="uppercase">{aboutInfoMain.title}</span>
        <h1 className="text-[48px]">{aboutInfoMain.header}</h1>
      </div>
      <div className="grid grid-cols-[1fr_1fr] place-items-center gap-6">
        <HomepageAboutInfoTextItem aboutInfo={aboutInfo} />
      </div>
    </div>
  );
};

export default HomepageAboutInfoText;
