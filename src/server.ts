import 'reflect-metadata';
const express = require('express');
const cors = require('cors');
import { AppDataSource } from './database/data-source';
import routers from './app/routes/routes';

AppDataSource.initialize().then(async () => {
	const app = express();

	app.use(cors());

	app.use(express.json());

	app.use(routers);
	app.listen(3333, () => {
		console.log('Server running on port 3333');
	});
});
