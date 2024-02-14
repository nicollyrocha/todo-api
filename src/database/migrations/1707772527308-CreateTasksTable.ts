import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTasksTable1707772527308 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tasks',
				columns: [
					{
						name: 'id',
						type: 'int',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'title',
						type: 'varchar',
					},
					{
						name: 'completed',
						type: 'boolean',
					},
					{
						name: 'description',
						type: 'varchar',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
