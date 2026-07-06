import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="text-3xl lg:text-4xl font-bold text-center mb-8 leading-tight">
        Your complete toolkit for
        <HighlightText text={"mastering code"} />
      </div>

      {/* Subheading */}
      <div className="text-center text-richblack-300 text-lg leading-8 max-w-4xl mx-auto">
        Track your progress, compete with peers, and plan your learning journey
        — everything you need to go from beginner to job-ready, all in one
        place.
      </div>

      {/* Feature Cards */}
      <div className="relative"></div>
      <div className="absolute inset-0 blur-[140px] bg-cyan-500/10 rounded-full"></div>
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 mt-16 w-full lg:w-[85%] mx-auto">
        {/* Card 1 */}
        <div className="group bg-richblack-800/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-5 flex-1 border border-richblack-700 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
          <div className="text-2xl">📈</div>
          <h3 className="text-white font-semibold text-xl">
            Know Your Progress
          </h3>
          <p className="text-richblack-400 text-base leading-7">
            Visual dashboards show exactly where you are, what you've completed,
            and what's next — so you always know how far you've come.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-richblack-800/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-5 flex-1 border border-richblack-700 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
          <div className="text-2xl">🏆</div>
          <h3 className="text-white font-semibold text-xl">
            Compare with Others
          </h3>
          <p className="text-richblack-400 text-base leading-7">
            See how you rank among peers, join leaderboards, and stay motivated
            by learning alongside a global community of developers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-richblack-800/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-5 flex-1 border border-richblack-700 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
          <div className="text-2xl">📅</div>
          <h3 className="text-white font-semibold text-xl">
            Plan Your Learning
          </h3>
          <p className="text-richblack-400 text-base leading-7">
            Set your own schedule, get personalized reminders, and build a
            consistent coding habit that fits your life.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="w-fit mx-auto lg:mb-20 mb-8 mt-14">
        <CTAButton active={true} linkto={"/signup"}>
          <div>Start Learning Today</div>
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
