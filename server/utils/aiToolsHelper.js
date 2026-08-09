const axios = require("axios");
 
const GEMINI_MODEL = "gemini-flash-latest";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
 
exports.askLLM = async (systemPrompt, userPrompt) => {
    const response = await axios.post(
        BASE_URL,
        {
            systemInstruction: {
                parts: [{ text: systemPrompt }],
            },
            contents: [
                {
                    role: "user",
                    parts: [{ text: userPrompt }],
                },
            ],
        },
        {
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": process.env.GEMINI_API_KEY,
            },
        }
    );
 
    return response.data.candidates[0].content.parts[0].text;
};

exports.askLLMForJSON = async (userPrompt) => {
    const response = await axios.post(
        BASE_URL,
        {
            contents: [
                {
                    role: "user",
                    parts: [{ text: userPrompt }],
                },
            ],
            generationConfig: {
                responseMimeType: "application/json",
            },
        },
        {
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": process.env.GEMINI_API_KEY,
            },
        }
    );
 
    const rawText = response.data.candidates[0].content.parts[0].text;
    return JSON.parse(rawText);
};