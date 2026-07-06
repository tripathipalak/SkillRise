import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      onClick={() => setCurrentCard(cardData?.heading)}
      className={`
        relative
        w-[360px]
        lg:w-[31%]
        h-[320px]
        cursor-pointer
        transition-all
        duration-300
        group
      `}
    >
      {/* Yellow Offset */}
      {isActive && (
        <div className="absolute top-3 left-3 w-full h-full rounded-2xl bg-[#FACC15] transition-all duration-300"></div>
      )}

      {/* Card */}
      <div
        className={`
          relative
          z-10
          h-full
          rounded-2xl
          border
          overflow-hidden
          transition-all
          duration-300

          ${
            isActive
              ? "bg-white border-white text-richblack-900"
              : "bg-richblack-800 border-richblack-700 hover:border-richblack-500 text-white"
          }
        `}
      >
        {/* Content */}
        <div className="h-[82%] p-7 border-b border-dashed border-richblack-300/30 flex flex-col gap-5">

          <h3
            className={`text-[30px] font-bold leading-tight ${
              isActive ? "text-richblack-900" : "text-white"
            }`}
          >
            {cardData.heading}
          </h3>

          <p
            className={`text-[16px] leading-8 ${
              isActive
                ? "text-richblack-600"
                : "text-richblack-300"
            }`}
          >
            {cardData.description}
          </p>

        </div>

        {/* Footer */}

        <div
          className={`flex justify-between items-center px-7 h-[18%]
          ${
            isActive
              ? "text-blue-600"
              : "text-richblack-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <HiUsers className="text-lg" />
            <p>{cardData.level}</p>
          </div>

          <div className="flex items-center gap-2">
            <ImTree className="text-lg" />
            <p>{cardData.lessionNumber} Lessons</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;