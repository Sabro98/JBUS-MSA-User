import { connect, connection, Error } from 'mongoose';

const DB_URL: string | undefined = process.env.DB_URL;

if (!DB_URL) {
  console.log('error on db');
} else {
  connect(DB_URL);
  const db = connection;

  const handleOpen = () => console.log('✔ Connected to DB');
  const handleError = (error: Error) => console.log('DB Error', error);

  db.on('error', handleError);
  db.once('open', handleOpen);
}
