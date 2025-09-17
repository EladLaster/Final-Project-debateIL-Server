'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('debates', 'score_user1', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    });

    await queryInterface.addColumn('debates', 'score_user2', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('debates', 'score_user1');
    await queryInterface.removeColumn('debates', 'score_user2');
  }
};
