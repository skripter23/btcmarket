import { FC } from "react";
import { IAboutItem } from "../../../Types/IAboutItem";

interface IHomePageAboutItem {
  about_item: IAboutItem;
}

const HomepageAboutItem: FC<IHomePageAboutItem> = ({ about_item }) => {
  return (
    <div className="max-w-[269px] w-full flex flex-col justify-center items-center gap-4">
      <img src={about_item.image as string} alt="Icon" />
      <span className="text-center">{about_item.title}</span>
      <span className="text-center">{about_item.description}</span>
    </div>
  );
};

export default HomepageAboutItem;
