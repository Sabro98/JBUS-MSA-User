import 'dotenv/config';
import './db';
import './model/User';
import app from './server';

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✔ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
