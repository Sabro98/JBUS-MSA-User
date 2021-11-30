import * as express from 'express';
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
  getSerial,
  getInfo,
} from '../controllers/userController';
const userRouter: express.Router = express.Router();

userRouter.route('/join').get(getJoin).post(postJoin);
userRouter.route('/login').get(getLogin).post(postLogin);
userRouter.route('/serial/:id').get(getSerial);
userRouter.route('/info/:id').get(getInfo);

export default userRouter;
