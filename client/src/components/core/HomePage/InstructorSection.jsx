import React from "react";
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdStar } from "react-icons/md";
import { BsPlayCircleFill } from "react-icons/bs";
import Instructor from "../../../assets/Images/Instructor.jpg";
import HighlightText from "./HighlightText";

const stats = [
  { icon: <HiUsers className="text-cyan-400" />, value: "1K+", label: "Active Instructors" },
  { icon: <MdStar className="text-cyan-400" />, value: "4.8★", label: "Avg Rating" },
  { icon: <BsPlayCircleFill className="text-cyan-400" />, value: "250+", label: "Courses Live" },
];

const InstructorSection = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">
        {/* Image with cyan glow offset */}
        <div className="w-full sm:w-[80%] lg:w-[60%] relative mx-auto lg:mx-0">
          {/* Glow layer */}
          {/* <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-full h-full rounded-2xl bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] opacity-30 blur-md z-0" /> */}
          <div className="ml-10 mr-7 w-[350px] lg:w-[520px] lg:ml-16 relative mx-auto lg:mx-0 shrink-0">
            <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-full h-full rounded-2xl bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] opacity-30 blur-md z-0" />
            <img
              src={Instructor}
              alt="Become an instructor on SkillRise"
              className="relative z-10 rounded-2xl w-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 lg:gap-6 text-center lg:text-left items-center lg:items-start">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
              Become an <HighlightText text={"instructor"} />
            </h1>
            {/* <p className="text-[16px] text-richblack-200 leading-relaxed w-[90%]"> */}
            <p className="text-[14px] sm:text-[17px] text-richblack-200 leading-relaxed w-full sm:w-[85%] lg:w-[90%] mx-auto lg:mx-0">
              Share your expertise with thousands of learners on SkillRise. We
              give you everything you need — tools, support, and a global
              audience — so you can focus on teaching what you love.
            </p>
          </div>

          {/* Stat badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-richblack-700 border border-richblack-600 hover:border-cyan-400/40 transition-colors duration-200 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3"
              >
                <span className="text-lg">{stat.icon}</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-white font-bold text-sm">
                    {stat.value}
                  </span>
                  <span className="text-richblack-400 text-[10px] sm:text-xs">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="w-fit mt-1">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;