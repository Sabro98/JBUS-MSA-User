import { Users } from '../../models/users';

console.log('create user table');

const create_table_users = async () => {
  await Users.sync()
    .then(() => console.log('Success'))
    .catch((err) => console.log('Error', err));
};

create_table_users();
