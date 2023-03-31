import { FC } from "react";
import { AboutData, AboutHeader } from "../../data/mockData";
import HomepageAboutItem from "./HomepageAboutItem/HomepageAboutItem";

const HomepageAbout: FC = () => {
  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 pb-32">
      <div className=" mx-auto w-full max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-[46px] text-center">{AboutHeader.title}</h1>
        </div>
        <div className="grid grid-cols-[1fr] gap-14 md:gap-0 md:grid-cols-[1fr_1fr_1fr] place-items-center pt-14">
          {(AboutData || []).map((item, i) => {
            return <HomepageAboutItem key={i} about_item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;
