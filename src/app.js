import express from 'express'
import questionsRouter from "./routes/questions.js";
import gameRunsRouter from "./routes/game-runs.js";

const app = express()

app.use('/questions', questionsRouter);
app.use('/game-runs', gameRunsRouter);

export default app;
