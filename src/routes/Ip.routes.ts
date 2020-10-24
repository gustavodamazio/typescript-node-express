import { Router } from 'express';
import PublicIpController from '@controllers/PublicIpController';
const router = Router();
const publicIpController = new PublicIpController();

// -----------------------------------------------------------------------------------------------------
// @ /ip
// -----------------------------------------------------------------------------------------------------
router.all('/', publicIpController.show);

export default router;
