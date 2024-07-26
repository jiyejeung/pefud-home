import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/user_entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'pefud-db.cbageeomstmnc.ap-northeast-1.rds.amazonaws.com',
  port: 5432,
  username: 'pefud',
  password: 'ghfkdlwps!',
  database: 'pefud_db',
  entities: [User],
  synchronize: true,
  logging: false
});

export default AppDataSource;

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
