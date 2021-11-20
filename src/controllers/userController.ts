import User from '../Model/User';
import { Request, Response } from 'express';

export const getJoin = (req: Request, res: Response) => {
  return res.send('join');
};

export const postJoin = async (req: Request, res: Response) => {
  const { playerID, playerNickName, playerModel } = req.body;

  const user = await User.exists({ playerID });
  if (user) return res.status(400).send('duplicated userID');

  try {
    const playerGroup = 1; // 플레이어의 그룹 설정 -> 방탈출 그룹으로 사용
    await User.create({ playerID, playerModel, playerNickName, playerGroup });
  } catch (err) {
    return res.status(400).send(err);
  }

  return res.send('Created');
};

export const getLogin = (req: Request, res: Response) => {
  return res.send('login');
};

export const postLogin = async (req: Request, res: Response) => {
  const { playerID } = req.body;
  const user = await User.findOne({ playerID });
  if (!user) {
    return res.status(400).send('not user in db');
  }

  const { playerNickName, playerModel, playerGroup } = user;
  const resUser = { playerID, playerNickName, playerModel, playerGroup };

  return res.send(JSON.stringify(resUser));
};

export const getSerial = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ playerID: id });

  if (!user) {
    return res.status(400).send('not user in db');
  }

  const { _id } = user;
  const obj = {
    id: _id,
    playerID: id,
  };
  return res.send(JSON.stringify(obj));
};
