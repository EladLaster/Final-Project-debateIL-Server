'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('1234', 10);

    await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        username: 'elad laster',
        email: 'eladlaster1@walla.com',
        password: hashedPassword,
        firstName: 'elad',
        lastName: 'laster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        username: 'mor laster',
        email: 'morush@gmail.com',
        password: hashedPassword,
        firstName: 'mor',
        lastName: 'laster',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users',null,{}
    );
  }
};
