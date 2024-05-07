import express from "express";
import {readQuestionsWithoutAnswers} from "../tools/json-files.js";

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.send(readQuestionsWithoutAnswers());
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

router.get('/:questionId', (req, res) => {
    try {
        const questionId = req.params.questionId;
        if(questionId === undefined) {
            res.sendStatus(400);
        }

        const foundQuestion = readQuestionsWithoutAnswers().find((question) => {return  question.id === questionId});
        if(foundQuestion === undefined) {
            res.status(404).send('Question not found');
        }
        res.send(foundQuestion);
    }
    catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
});

export default router;