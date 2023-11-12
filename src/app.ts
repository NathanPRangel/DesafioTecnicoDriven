import express, { json } from 'express';
import cors from 'cors';
import participantRouter from './routers/participants-routers';

const app = express();
export default app;

app.use(json());
app.use(cors());
app.use('/participant', participantRouter);
