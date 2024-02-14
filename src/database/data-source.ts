import 'reflect-metadata';
import { DataSource } from 'typeorm';
//import { User } from "./entity/User"
import { CreateTasksTable1707772527308 } from './migrations/1707772527308-CreateTasksTable';
import Task from '../app/entities/Task';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'nini050298',
	database: 'todo_db',
	synchronize: true,
	logging: false,
	entities: [Task],
	migrations: [CreateTasksTable1707772527308],
	subscribers: [],
});
