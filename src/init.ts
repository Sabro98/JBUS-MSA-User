import 'dotenv/config';
import './db';
import './model/User';
import { app1, app2 } from './server';

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✔ Server listening on port http://localhost:${PORT} 🚀`);

app1.listen(PORT, handleListening);
app2.listen(9000, () =>
  console.log(`✔ Server listening on port http://localhost:9000 🚀`)
);
