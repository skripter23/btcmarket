import { FC } from "react";
import { ButtonText, CreateAccount } from "../../data/mockData";
import Button from "../Button/Button";

const HomepageCreateAccount: FC = ({}) => {
  return (
    <section className="w-full px-6 lg:px-20 xl:px-40 pb-10 md:pb-32">
      <div className=" mx-auto w-full flex flex-col gap-9 justify-center items-center md:items-start max-w-tablet sm:max-w-laptop md:max-w-largeLaptop lg:max-w-desktop">
        <h1 className="max-w-[427px] text-[46px] text-center md:text-start">{CreateAccount}</h1>
        <Button text={ButtonText.createAccount.getStarted} background />
      </div>
    </section>
  );
};

export default HomepageCreateAccount;
