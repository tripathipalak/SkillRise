const express = require("express")
const router = express.Router()
const { auth } = require("../middlewares/auth")

const {
    generateQuiz,
    explainConcept,
    generateLearningPath,
} = require("../controllers/AITools")
 
router.post("/generateQuiz", auth, generateQuiz)
router.post("/explainConcept", auth, explainConcept)
router.post("/generateLearningPath", auth, generateLearningPath)
 
module.exports = router