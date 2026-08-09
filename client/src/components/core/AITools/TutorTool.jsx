import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { explainConcept } from "../../../services/aiToolsAPI";

const markdownComponents = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-richblack-5">{children}</strong>,
  ul: ({ children }) => <ul className="mb-2 list-disc pl-5">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 list-decimal pl-5">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,
  h1: ({ children }) => <h3 className="mb-2 mt-3 text-base font-semibold text-richblack-5">{children}</h3>,
  h2: ({ children }) => <h3 className="mb-2 mt-3 text-base font-semibold text-richblack-5">{children}</h3>,
  h3: ({ children }) => <h4 className="mb-1 mt-2 text-sm font-semibold text-richblack-5">{children}</h4>,
  
  code: ({ children }) => (
    <code className="rounded bg-richblack-900 px-1.5 py-0.5 text-xs text-richblack-100">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className="mb-2 overflow-x-auto rounded-md bg-richblack-900 p-3 text-xs">{children}</pre>
  ),
};

export default function TutorTool() {
  const [question, setQuestion] = useState("");
  const [level, setLevel] = useState("beginner");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    const userQuestion = question;
    setMessages((prev) => [...prev, { role: "user", text: userQuestion }]);
    setQuestion("");
    setLoading(true);

    const result = await explainConcept(userQuestion, level);
    if (result) {
      setMessages((prev) => [...prev, { role: "ai", text: result.answer }]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
        <span className="text-sm text-richblack-300">Explain like I'm a:</span>
        {["beginner", "intermediate", "advanced"].map((l) => (
          <button
            key={l}
            onClick={() => setLevel(l)}
            className={`rounded-full px-3 py-1 text-xs capitalize ${
              level === l ? "bg-yellow-50 text-richblack-900" : "bg-richblack-700 text-richblack-300"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="flex max-h-72 sm:max-h-96 flex-col gap-y-3 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[92%] sm:max-w-[85%] rounded-md px-3 py-2 text-sm ${
              m.role === "user"
                ? "self-end bg-yellow-50 text-richblack-900"
                : "self-start bg-richblack-700 text-richblack-5"
            }`}
          >
            {m.role === "ai" ? (
              <ReactMarkdown components={markdownComponents}>{m.text}</ReactMarkdown>
            ) : (
              m.text
            )}
          </div>
        ))}
        {loading && (
          <div className="self-start rounded-md bg-richblack-700 px-3 py-2 text-sm text-richblack-300">
            Thinking...
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          placeholder="Ask about any concept, e.g. 'What is a closure in JS?'"
          className="w-full rounded-md border border-richblack-600 bg-richblack-700 px-3 py-2 text-sm text-richblack-5 placeholder-richblack-400 focus:outline-none"
        />
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          className="w-full sm:w-auto rounded-md bg-yellow-50 px-4 py-2 text-sm font-semibold text-richblack-900 disabled:opacity-50"
        >
          Ask
        </button>
      </div>
    </div>
  );
}