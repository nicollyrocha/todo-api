import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
class Task {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@Column('varchar', { length: 100 })
	title: string;

	@Column('boolean')
	completed: boolean;

	@Column('varchar', { length: 100 })
	description: string;
}

export default Task;
