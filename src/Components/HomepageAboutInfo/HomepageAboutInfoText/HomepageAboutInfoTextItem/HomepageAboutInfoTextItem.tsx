import { FC } from "react";
import { IAboutInfo } from "../../../../Types/IAboutInfo";

interface IHomepageAboutInfoTextItem {
  aboutInfo: Array<IAboutInfo>;
}

const HomepageAboutInfoTextItem: FC<IHomepageAboutInfoTextItem> = ({ aboutInfo }) => {
  return (
    <>
      {(aboutInfo || []).map((item, i) => {
        return (
          <div key={i} className="w-full flex flex-col justify-center items-center md:items-start gap-1 md:gap-3">
            <img src={item.image} alt="Image" />
            <span>{item.title}</span>
            <span className="text-center md:text-start">{item.description}</span>
          </div>
        );
      })}
    </>
  );
};

export default HomepageAboutInfoTextItem;
