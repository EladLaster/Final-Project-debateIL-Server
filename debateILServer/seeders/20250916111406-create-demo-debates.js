'use strict';

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('debates', [
      {
        topic: 'Should AI replace teachers?',
        start_time: new Date(),
        end_time: null,
        status: 'scheduled',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: 'Is remote work the future?',
        start_time: new Date(),
        end_time: null,
        status: 'scheduled',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        topic: 'Should cryptocurrencies be regulated?',
        start_time: new Date(),
        end_time: null,
        status: 'scheduled',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('debates', null, {});
  }
};
