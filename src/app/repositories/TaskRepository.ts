import Task from '../entities/Task';
import ITask from '../interfaces/ITask';
import { AppDataSource } from '../../database/data-source';

const taskRepository = AppDataSource.getRepository(Task);

const getTasks = (): Promise<ITask[]> => {
	return taskRepository.find();
};

const setTasks = (task: ITask) => {
	return taskRepository.save(task);
};

const updateTask = (task: ITask) => {
	return taskRepository.save(task, { reload: false });
};

const deleteTask = (id: string) => {
	return taskRepository.delete(id);
};

export { getTasks, setTasks, updateTask, deleteTask };
