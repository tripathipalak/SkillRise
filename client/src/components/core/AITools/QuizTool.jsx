import { useState } from "react";
import { useSelector } from "react-redux";
import { generateQuizFromText } from "../../../services/aiToolsAPI";

export default function QuizTool() {
  const { token } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [revealed, setRevealed] = useState({});
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateQuizFromText(content, token);
    if (result) {
      setQuiz(result);
      setRevealed({});
      setSelected({});
    }
    setLoading(false);
  };

  const selectOption = (qIndex, optIndex) => {
    setSelected((prev) => ({ ...prev, [qIndex]: optIndex }));
    setRevealed((prev) => ({ ...prev, [qIndex]: true }));
  };

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-richblack-300 text-sm">
        Paste any notes, an article, or a topic summary. The AI will turn it into a 5-question quiz.
      </p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        placeholder="Paste your notes here..."
        className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm text-richblack-5 placeholder-richblack-400 focus:outline-none"
      />
      <button
        onClick={handleGenerate}
        disabled={loading || !content.trim()}
        className="w-full sm:w-auto self-start rounded-md bg-yellow-50 px-4 py-2 text-sm font-semibold text-richblack-900 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {quiz && (
        <div className="mt-2 flex flex-col gap-y-6">
          {quiz.questions.map((q, qIndex) => (
            <div key={qIndex}>
              <p className="mb-2 font-medium text-richblack-5">
                {qIndex + 1}. {q.question}
              </p>
              <div className="flex flex-col gap-y-2">
                {q.options.map((opt, optIndex) => {
                  const isSelected = selected[qIndex] === optIndex;
                  const isCorrect = optIndex === q.correctAnswerIndex;
                  const showColor = revealed[qIndex];
                  let colorClasses = "border-richblack-600 text-richblack-100";
                  if (showColor && isCorrect) colorClasses = "border-caribbeangreen-300 text-caribbeangreen-100";
                  else if (showColor && isSelected && !isCorrect) colorClasses = "border-pink-300 text-pink-100";

                  return (
                    <button
                      key={optIndex}
                      onClick={() => selectOption(qIndex, optIndex)}
                      className={`rounded-md border px-4 py-2 text-left text-sm ${colorClasses}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {revealed[qIndex] && (
                <p className="mt-2 text-sm text-richblack-300">{q.explanation}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}