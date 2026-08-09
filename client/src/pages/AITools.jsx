import { useState } from "react";
import QuizTool from "../components/core/AITools/QuizTool";
import TutorTool from "../components/core/AITools/TutorTool";
import PathTool from "../components/core/AITools/PathTool";
import { Bot, FileQuestion, Route } from "lucide-react";

const TABS = [
  { key: "tutor", label: <><Bot size={17} /> AI Tutor</>, component: TutorTool },
  { key: "quiz", label: <><FileQuestion size={17} /> Quiz Generator</>, component: QuizTool },
  { key: "path", label: <><Route size={17} /> Learning Path</>, component: PathTool },
];

export default function AITools() {
  const [active, setActive] = useState("tutor");
  const ActiveComponent = TABS.find((t) => t.key === active).component;

  return (
    <div className="mx-auto w-11/12 max-w-[900px] py-6 sm:py-10 text-richblack-5">
      <h1 className="mb-2 text-2xl sm:text-3xl font-semibold">AI Learning Tools</h1>
      <p className="mb-6 text-sm sm:text-base text-richblack-300">
        Get instant explanations, practice quizzes, and a personalized roadmap — powered by AI.
      </p>

      <div className="mb-6 flex gap-x-2 overflow-x-auto border-b border-richblack-700">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`flex items-center gap-x-1.5 whitespace-nowrap px-4 py-2 text-sm font-medium ${
              active === tab.key
                ? "border-b-2 border-yellow-50 text-yellow-50"
                : "text-richblack-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="rounded-md border border-richblack-700 bg-richblack-800 p-4 sm:p-5">
        <ActiveComponent />
      </div>
    </div>
  );
}