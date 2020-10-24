import express from 'express';
import 'express-async-errors';
import AppRoutes from '@routes';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from '@errors/Handler';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

dotenv.config(); // Config env.
const app = express(); // Instance express app.

// #region Set basic express settings.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development.
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
}

// Security.
if (process.env.NODE_ENV === 'prod') {
    app.use(helmet());
}
// #endregion

// #region Api Routes
app.use('/', AppRoutes);
// #endregion

// #region Static
const staticDir = path.join(__dirname, 'static');
app.use('/static', express.static(staticDir));
// #endregion

// #region ErrorHandler.
app.use(errorHandler);
// #endregion
export default app;
