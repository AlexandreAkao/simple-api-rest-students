import Sequelize from 'sequelize';

import Student from '../models/Student';
import databaseConfig from '../config/database';

const models = [Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.forEach((model) => model.init(this.connection));
  }
}

export default new Database();
