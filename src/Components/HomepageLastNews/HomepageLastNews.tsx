import { FC } from "react";
import NewHead from "@Assets/NewHead.png";
import styles from "@Styles/LastNews/LastNews.module.scss";
import { LastNews, WebSites } from "../../data/mockData";

const HomepageLastNews: FC = () => {
  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 pb-10 md:pb-32">
      <div className=" mx-auto w-full flex flex-col gap-4 justify-center items-center max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <h1 className="text-[31px] text-center md:text-start">{LastNews.header}</h1>
        <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] place-items-center gap-8">
          {(LastNews.items || []).map((item, i) => {
            return (
              <div key={i} className={`max-w-[357px] w-full flex flex-col p-2 ${styles.border}`}>
                <img src={item.image} alt="News" height={148} className="rounded-t-[8px]" />
                <div className="flex gap-4 items-center pt-4">
                  <span className="bg-[#BDFFEB] text-[12px] p-1">{item.tag}</span>
                  <span className="text-[12px] uppercase">{item.date}</span>
                </div>
                <span className="text-[24px] pt-5 min-h-[100px] ">{item.header}</span>
                <span className="py-8 justify-self-end">{item.more}</span>
              </div>
            );
          })}
        </div>
        <span className="text-[15px] py-6 text-center md:text-start">{LastNews.footer}</span>
        <div className="flex justify-center items-center flex-col md:flex-row gap-8">
          <div className="flex justify-center items-center gap-2">
            <img src={WebSites.twitter.image} alt={WebSites.twitter.title} />
            <span>{WebSites.twitter.title}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={WebSites.facebook.image} alt={WebSites.facebook.title} />
            <span>{WebSites.facebook.title}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={WebSites.linkedIn.image} alt={WebSites.linkedIn.title} />
            <span>{WebSites.linkedIn.title}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={WebSites.telegram.image} alt={WebSites.telegram.title} />
            <span>{WebSites.telegram.title}</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={WebSites.instagram.image} alt={WebSites.instagram.title} />
            <span>{WebSites.instagram.title}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageLastNews;
