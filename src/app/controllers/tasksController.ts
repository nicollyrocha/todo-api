import { Request, Response, Router } from 'express';
import * as TaskRepository from '../repositories/TaskRepository';
import ITask from '../interfaces/ITask';

const tasksRouter = Router();

tasksRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
	const tasks = await TaskRepository.getTasks();

	return res.status(200).send({ body: tasks });
});

tasksRouter.post('/', async (req: Request, res: Response) => {
	const task: ITask = req.body;
	const newTask = await TaskRepository.setTasks(task);

	return res.status(200).json(newTask);
});

tasksRouter.put('/task/:id', async (req: Request, res: Response) => {
	const task: ITask = req.body;
	const updatedTask = await TaskRepository.updateTask(task);

	return res.status(200).json(updatedTask);
});

tasksRouter.delete('/task/:id', async (req: Request, res: Response) => {
	const id = req.params.id;
	const updatedTask = await TaskRepository.deleteTask(id);

	return res.status(200).json(updatedTask);
});

export default tasksRouter;
