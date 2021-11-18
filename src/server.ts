import * as express from 'express';
import * as morgan from 'morgan';
import userRouter from './routers/userRouter';

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

export default app;
