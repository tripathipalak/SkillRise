import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Expert-Led Learning",
    Description: "Courses built and taught by real industry professionals",
  },
  {
    Logo: Logo2,
    Heading: "Student First",
    Description: "Your growth and success is always our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Learn at Your Pace",
    Description: "Flexible scheduling that fits around your life",
  },
  {
    Logo: Logo4,
    Heading: "Build Real Projects",
    Description: "Code your way to a portfolio that gets you hired",
  },
];

const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-14 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-400 shadow-[0_0_40px_6px_rgba(56,189,248,0.45)]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 rounded-2xl">
            {/* Section 1 */}
            <div className="flex gap-2 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[50px]">10+</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[60px]">250+</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          
{/* <img
  src={TimeLineImage}
  alt="timelineImage"
  className="
    w-full
    max-w-[600px]
    h-auto
    object-cover
    rounded-2xl
    shadow-white
    shadow-[14px_14px_0px_0px]
  "
/> */}
<img
  src={TimeLineImage}
  alt="timelineImage"
  className="
    w-[90%]
    sm:w-[500px]
    lg:w-[600px]
    h-[250px]
    sm:h-[320px]
    lg:h-[400px]
    object-cover
    rounded-2xl
    shadow-white
    shadow-[14px_14px_0px_0px]
  "
/>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;