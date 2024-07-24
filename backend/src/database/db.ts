import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/user_entity';

const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'pefud',
  entities: [User],
  synchronize: true,
  logging: false
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
