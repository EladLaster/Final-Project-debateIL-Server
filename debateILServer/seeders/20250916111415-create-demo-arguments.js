'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM users ORDER BY createdAt ASC;`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (users.length < 2) throw new Error('Not enough users found to seed arguments');

    await queryInterface.bulkInsert('arguments', [
      {
        debate_id: 1,
        user_id: users[0].id, 
        text: 'AI can support teachers but not replace them completely.',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        debate_id: 1,
        user_id: users[1].id,
        text: 'Replacing teachers with AI is risky; human interaction is essential.',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        debate_id: 2,
        user_id: users[0].id,
        text: 'Remote work increases productivity and flexibility.',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('arguments', null, {});
  }
};
