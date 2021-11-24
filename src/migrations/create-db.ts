import { QueryInterface, Sequelize, Options } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

class options implements Options {
  dialect!: 'mysql';
  username!: string;
  password!: string;
}

const createDBOptions = new options();
createDBOptions.username = process.env.DB_USERNAME || 'root';
createDBOptions.password = process.env.DB_PASSWORD || 'your password';
createDBOptions.dialect = 'mysql';

const db_name = process.env.DB_DBNAME || 'new DataBase';

const dbCreateSequelize = new Sequelize(createDBOptions);

dbCreateSequelize
  .getQueryInterface()
  .createDatabase(db_name)
  .then(() => console.log('db create success!'))
  .catch((err) => console.log('err', err));
