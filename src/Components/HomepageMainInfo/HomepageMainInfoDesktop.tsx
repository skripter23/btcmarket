import { FC, useState } from "react";
import IphoneIcon from "../../Assets/Iphone.png";
import GoogleIcon from "../../Assets/GoogleColor.png";
import Button from "../Button";
import StarRating from "../StarRating";

const HomepageMainInfoDesktop: FC = ({}) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <section className="w-full pt-20 min-h-[100px] flex justify-center px-6 lg:px-20 xl:px-40">
      <div className="w-full flex gap-14 justify-between max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <div className="flex flex-col gap-9">
          <h1 className="text-[71px]">Buy, sell and trade crypto today</h1>
          <span className="text-[20px] text-gray max-w-[470px]">
            Trade with confidence and build your future with Australia’s fastest crypto exchange.
          </span>
          <div className="flex gap-4">
            <Button text="Get started" key={1} background />
            <Button text="View exchange" key={2} />
          </div>
          <div className="flex gap-3">
            <img src={GoogleIcon} alt="Google" />
            <StarRating setRating={setRating} totalStars={5} />
            <span>{rating}.0</span>
          </div>
        </div>
        <img src={IphoneIcon} alt="Iphone" />
      </div>
    </section>
  );
};

export default HomepageMainInfoDesktop;
