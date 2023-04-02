import { FC } from "react";
import AboutInfoImage from "@Assets/AboutInfo.png";
import AboutInfoImageReverse from "@Assets/AboutInfoReverse.png";

interface IHomepageAboutInfoImage {
  reverse?: boolean;
}

const HomepageAboutInfoImage: FC<IHomepageAboutInfoImage> = ({ reverse = false }) => {
  return (
    <div className="w-full py-12 md:py-0 flex justify-center items-center">
      <img src={reverse ? AboutInfoImageReverse : AboutInfoImage} alt="Image" className=" w-full" />
    </div>
  );
};

export default HomepageAboutInfoImage;
