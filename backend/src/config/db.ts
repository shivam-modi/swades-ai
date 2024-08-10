import { Sequelize } from 'sequelize';
import env from './env';

const sequelize = new Sequelize(env.DATABASE_URL, {
  logging: false, 
});

export default sequelize;
