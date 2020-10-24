import { Router } from 'express';
import IpRoutes from './Ip.routes';

const router = Router();

// #region Declare routes.
router.use('/ip', IpRoutes);
// #endregion

// Export base.
export default router;
