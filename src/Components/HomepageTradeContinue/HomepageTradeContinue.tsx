import { FC, useState } from "react";
import { TradeContinue } from "../../data/mockData";
import StarRating from "../StarRating";

const HomepageTradeContinue: FC = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 pb-10 md:pb-32">
      <div className=" mx-auto w-full flex flex-col gap-4 justify-center items-start max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <h1 className="text-[48px]">{TradeContinue.title}</h1>
        <span className="max-w-[517px]">{TradeContinue.description}</span>
        <div className="flex gap-9">
          <div className="flex flex-col gap-3">
            <img src={TradeContinue.download.apple} alt="Apple store" />
            <div className="flex gap-2">
              <StarRating setRating={setRating} totalStars={5} />
              <span>{rating}.0</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <img src={TradeContinue.download.google} alt="Google play" />
            <div className="flex gap-2">
              <StarRating setRating={setRating} totalStars={5} />
              <span>{rating}.0</span>
            </div>
          </div>
        </div>
        <span>{TradeContinue.more}</span>
      </div>
    </section>
  );
};

export default HomepageTradeContinue;
