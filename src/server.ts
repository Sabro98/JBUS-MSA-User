import * as express from 'express';
import * as morgan from 'morgan';
import userRouter from './routers/userRouter';
import { Users } from './models/users';

const app = express();

const logger = morgan('dev');

app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/:id', async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const user = await Users.findOne({ where: { playerID: id } });
  if (user) {
    return res.json(user);
  }
  await Users.create({
    playerID: id,
    playerModel: 'hi',
    playerNickName: 'hi',
    playerGroup: 10,
    latestChannel: 'hi',
  }).then(() => console.log('GOOD'));
  return res.send('HI');
});

export default app;
