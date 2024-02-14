import { Router } from 'express';
import tasksRouter from '../controllers/tasksController';

const routers = Router();

routers.use('/', tasksRouter);

export default routers;
