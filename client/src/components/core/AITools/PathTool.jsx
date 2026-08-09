import { useState } from "react";
import { generateLearningPath } from "../../../services/aiToolsAPI";

export default function PathTool() {
  const [goal, setGoal] = useState("");
  const [currentSkills, setCurrentSkills] = useState("");
  const [path, setPath] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateLearningPath(goal, currentSkills || "none");
    if (result) setPath(result.path);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <label className="mb-1 block text-sm text-richblack-300">Your goal</label>
        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="e.g. Become a full-stack MERN developer"
          className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm text-richblack-5 placeholder-richblack-400 focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-richblack-300">What you already know (optional)</label>
        <input
          value={currentSkills}
          onChange={(e) => setCurrentSkills(e.target.value)}
          placeholder="e.g. HTML, CSS, basic JavaScript"
          className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm text-richblack-5 placeholder-richblack-400 focus:outline-none"
        />
      </div>
      <button
        onClick={handleGenerate}
        disabled={loading || !goal.trim()}
        className="w-full sm:w-auto self-start rounded-md bg-yellow-50 px-4 py-2 text-sm font-semibold text-richblack-900 disabled:opacity-50"
      >
        {loading ? "Building path..." : "Generate Learning Path"}
      </button>

      {path && (
        <ol className="mt-2 flex flex-col gap-y-3">
          {path.map((step, i) => (
            <li key={i} className="rounded-md border border-richblack-700 bg-richblack-800 p-3">
              <div className="flex items-center gap-x-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-50 text-xs font-bold text-richblack-900">
                  {i + 1}
                </span>
                <span className="font-medium text-richblack-5">{step.topic}</span>
              </div>
              <p className="mt-1 pl-8 text-sm text-richblack-300">{step.why}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}