import express from 'express';
import { getServerStats } from '../modules/cpu-monitor';

const router = express.Router();

router.get('/server-health', async (req, res) => {
  try {
    const stats = await getServerStats();
    res.json(stats);
  } catch (error) {
    console.error('Error retrieving server stats:', error);
    res.status(500).send('Error retrieving server stats');
  }
});

const useRouter = (app: express.Application) => {
  app.use('/api', router);
};

export default useRouter;
