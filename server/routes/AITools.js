const express = require("express")
const router = express.Router()
 
const {
    generateQuiz,
    explainConcept,
    generateLearningPath,
} = require("../controllers/AITools")
 
router.post("/generateQuiz", generateQuiz)
router.post("/explainConcept", explainConcept)
router.post("/generateLearningPath", generateLearningPath)
 
module.exports = router