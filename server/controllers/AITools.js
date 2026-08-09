const { askLLM, askLLMForJSON } = require("../utils/aiToolsHelper");

exports.generateQuiz = async (req, res) => {
    try {
        const { content, numQuestions = 5 } = req.body;

        if (!content || content.trim().length < 30) {
            return res.status(400).json({
                success: false,
                message: "Please paste at least a paragraph of content to generate a quiz from.",
            });
        }

        const prompt = `
You are a quiz generator for an e-learning platform.
Based on the content below, generate ${numQuestions} multiple-choice questions.

Content:
"""
${content}
"""

Return ONLY valid JSON in this exact shape:
{
  "questions": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correctAnswerIndex": 0,
      "explanation": "string"
    }
  ]
}`;

        const quiz = await askLLMForJSON(prompt);

        return res.status(200).json({ success: true, data: quiz });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Could not generate quiz" });
    }
};


exports.explainConcept = async (req, res) => {
    try {
        const { question, level = "beginner" } = req.body;

        if (!question || !question.trim()) {
            return res.status(400).json({
                success: false,
                message: "Please enter a question or topic.",
            });
        }

        const answer = await askLLM(
            `You are a friendly programming/tech tutor. Explain concepts clearly for a ${level} learner, using a short example where helpful. Keep answers concise.`,
            question
        );

        return res.status(200).json({ success: true, data: { answer } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Could not get an answer" });
    }
};


exports.generateLearningPath = async (req, res) => {
    try {
        const { goal, currentSkills = "none" } = req.body;

        if (!goal || !goal.trim()) {
            return res.status(400).json({
                success: false,
                message: "Please enter a learning goal.",
            });
        }

        const prompt = `
A learner wants to achieve this goal: "${goal}"
Their current skills/experience: "${currentSkills}"

Suggest a sequenced learning path of 5-8 topics/technologies they should
learn in order to reach their goal, skipping anything they already know.

Return ONLY valid JSON in this exact shape:
{
  "path": [
    { "topic": "string", "why": "one sentence on why this comes at this step" }
  ]
}`;

        const path = await askLLMForJSON(prompt);

        return res.status(200).json({ success: true, data: path });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Could not generate a learning path" });
    }
};