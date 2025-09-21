'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'gender', {
      type: Sequelize.ENUM('male', 'female'),
      allowNull: false,
      defaultValue: 'male'
    });

    await queryInterface.addColumn('users', 'avatarUrl', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'gender');
    await queryInterface.removeColumn('users', 'avatarUrl');
  }
};
