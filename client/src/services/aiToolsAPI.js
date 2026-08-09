import axios from "axios"
import { toast } from "react-hot-toast"

const BASE_URL = process.env.REACT_APP_BASE_URL + "/ai-tools"

export const generateQuizFromText = async (content) => {
    const toastId = toast.loading("Generating quiz...")
    let result = null
    try {
        const response = await axios.post(`${BASE_URL}/generateQuiz`, { content })
        if (!response?.data?.success) throw new Error(response?.data?.message)
        result = response.data.data
    } catch (error) {
        toast.error(error.message || "Could not generate quiz")
    }
    toast.dismiss(toastId)
    return result
}

export const explainConcept = async (question, level) => {
    let result = null
    try {
        const response = await axios.post(`${BASE_URL}/explainConcept`, { question, level })
        if (!response?.data?.success) throw new Error(response?.data?.message)
        result = response.data.data
    } catch (error) {
        toast.error(error.message || "Could not get an answer")
    }
    return result
}

export const generateLearningPath = async (goal, currentSkills) => {
    const toastId = toast.loading("Building your learning path...")
    let result = null
    try {
        const response = await axios.post(`${BASE_URL}/generateLearningPath`, { goal, currentSkills })
        if (!response?.data?.success) throw new Error(response?.data?.message)
        result = response.data.data
    } catch (error) {
        toast.error(error.message || "Could not generate a learning path")
    }
    toast.dismiss(toastId)
    return result
}