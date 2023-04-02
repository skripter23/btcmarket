import { Dispatch, FC, SetStateAction, useState } from "react";

interface IStarRating {
  totalStars: number;
  setRating: Dispatch<SetStateAction<number>>;
}

const StarRating: FC<IStarRating> = ({ totalStars, setRating }) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleMouseOver = (selectedStars: number) => {
    setSelectedStars(selectedStars);
    setRating(selectedStars);
  };

  return (
    <div className="cursor-pointer flex items-center gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={starValue}
            onMouseOver={() => handleMouseOver(starValue)}
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill={selectedStars >= starValue ? "black" : "white"}
            stroke="black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.24438 0C7.76679 0 8.24875 0.271746 8.50577 0.711217L10.27 3.72787L13.318 4.30406C13.849 4.40444 14.2779 4.78235 14.4302 5.28403C14.5824 5.78571 14.4327 6.32757 14.0419 6.68916L11.7237 8.83429L12.26 12.3986C12.3378 12.9156 12.1111 13.4315 11.6722 13.7366C11.2332 14.0416 10.6549 14.0851 10.1724 13.8494L7.24438 12.4188L4.31636 13.8494C3.83382 14.0851 3.25557 14.0416 2.8166 13.7366C2.37763 13.4315 2.15099 12.9156 2.22879 12.3986L2.76509 8.83429L0.446822 6.68916C0.0560427 6.32757 -0.0936678 5.78571 0.0585983 5.28403C0.210864 4.78235 0.639734 4.40444 1.17073 4.30406L4.21874 3.72787L5.98299 0.711217C6.24001 0.271746 6.72197 0 7.24438 0Z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
