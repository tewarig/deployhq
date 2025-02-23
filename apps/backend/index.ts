import express from 'express';
import useRouter from './routes';
import { getServerStats } from "./modules/cpu-monitor"



const app = express();
const port = 3000;


app.get('/server-stats', async (req, res) => {
  const serverStats = await getServerStats();
  res.json(serverStats);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
