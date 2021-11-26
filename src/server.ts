import * as express from 'express';
import * as morgan from 'morgan';
import userRouter from './routers/userRouter';

export const app1 = express();
export const app2 = express();
const apps = [app1, app2];

const logger = morgan('dev');

apps.forEach((app) => {
  app.use(logger);
  app.use(express.urlencoded({ extended: true }));

  app.use('/user', userRouter);
  app.use('/', (req: express.Request, res: express.Response) =>
    res.send('JBUS User Root!')
  );
});
