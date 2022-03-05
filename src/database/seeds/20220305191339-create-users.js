const bcrypt = require('bcryptjs');
// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface) {
    const fakeUsers = Array.from({ length: 20 }, () => {
      const name = faker.name.findName();
      return {
        name,
        email: faker.internet.email(name),
        password_hash: bcrypt.hashSync('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert('users', fakeUsers, {});
  },

  async down() {},
};
