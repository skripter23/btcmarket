import { FC, useState } from "react";
import { TradingData } from "../../data/mockData";
import HomepageAboutItem from "../HomepageAbout/HomepageAboutItem/HomepageAboutItem";
import Button from "../Button/Button";
import GoogleIcon from "@Assets/GoogleColor.png";
import StarRating from "../StarRating";

const HomepageTrading: FC = () => {
  const [rating, setRating] = useState<number>(0);

  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 py-10 md:py-32">
      <div className=" mx-auto w-full flex flex-col gap-8 justify-center items-center max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <h1 className="text-[48px] text-center max-w-[395px]">Start trading in 3 easy steps</h1>
        <div className="w-full grid grid-cols-[1fr] gap-14 md:gap-0 md:grid-cols-[1fr_1fr_1fr] place-items-center pt-14">
          {(TradingData || []).map((item, i) => {
            return <HomepageAboutItem key={i} about_item={item} />;
          })}
        </div>
        <Button text="Get started" background />
        <div className="flex gap-3">
          <img src={GoogleIcon} alt="Google" />
          <StarRating setRating={setRating} totalStars={5} />
          <span>{rating}.0</span>
        </div>
      </div>
    </section>
  );
};

export default HomepageTrading;
