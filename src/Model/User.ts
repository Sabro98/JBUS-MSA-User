import { Schema, model } from 'mongoose';

interface User {
  playerID: string;
  playerNickName: string;
  playerModel: string;
  playerGroup: number;
  meta: {
    generatedAt: Date;
    latestChannel: string;
  };
}

const schema = new Schema<User>({
  playerID: { type: String, required: true, unique: true, trim: true },
  playerNickName: { type: String, required: true, trim: true },
  playerModel: { type: String, required: true },
  playerGroup: { type: Number },
  meta: {
    generatedAt: { type: Date, default: Date.now },
    latestChannel: { type: String, default: null },
  },
});

const UserModel = model<User>('User', schema);

export default UserModel;
