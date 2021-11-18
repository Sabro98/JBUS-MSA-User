import * as express from 'express';
import {
  getJoin,
  getLogin,
  postJoin,
  postLogin,
} from '../controllers/userController';
const userRouter: express.Router = express.Router();

userRouter.route('/join').get(getJoin).post(postJoin);
userRouter.route('/login').get(getLogin).post(postLogin);

export default userRouter;
