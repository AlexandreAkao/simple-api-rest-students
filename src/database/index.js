import Sequelize from 'sequelize';

import Student from '../models/Student';
import User from '../models/User';
import databaseConfig from '../config/database';
import Image from '../models/Image';

const models = [Student, User, Image];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
