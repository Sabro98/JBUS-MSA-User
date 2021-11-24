import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

interface UsersAttributes {
  playerID: string;
  playerNickName: string;
  playerModel: string;
  playerGroup: number;
  latestChannel: string;
}

export class Users extends Model<UsersAttributes> {
  // public readonly id!: number;
  public playerID!: string;
  public playerNickName!: string;
  public playerModel!: string;
  public playerGroup!: number;
  public latestChannel!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Users.init(
  {
    playerID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    playerNickName: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    playerModel: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    playerGroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    latestChannel: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    modelName: 'Users',
    tableName: 'Users',
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updateTimestamp',
  }
);
