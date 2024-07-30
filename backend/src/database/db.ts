import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/user_entity';
import * as fs from 'fs';

const certPath = '/Users/jiyejeung/Development/ap-northeast-1-bundle.pem';

export const AppDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: 'pefud-db.cbageeomstmc.ap-northeast-1.rds.amazonaws.com',
  port: 5432,
  username: 'pefud',
  password: 'ghfkdlwps!',
  database: 'pefud_db',
  entities: [User],
  synchronize: true,
  logging: false,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(certPath).toString()
  }
});
