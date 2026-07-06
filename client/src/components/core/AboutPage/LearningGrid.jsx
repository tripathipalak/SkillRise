import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "SkillRise brings together the best instructors, real-world projects, and a thriving community — so you can learn skills that actually matter, at your own pace, from anywhere in the world.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Every course on SkillRise is designed with one goal — to make you job-ready. No outdated content, no fluff. Just skills the industry actually demands.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Learn by doing. SkillRise combines video lessons, hands-on projects, and real code challenges to make sure concepts actually stick.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Earn certificates that mean something. Every SkillRise certificate is tied to a real project — proof of what you can actually build.",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Get instant feedback on your code with our auto-grading system. Know exactly where you stand and what to improve — in real time.",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "From your first lesson to your first job — SkillRise prepares you with portfolio-ready projects, interview prep, and career guidance.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                  ? "bg-richblack-800 h-[294px]"
                  : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
