"use strict";
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("1234", 10);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuidv4(), // הוסף UUID
          username: "liorkk7",
          email: "liorkk7@gmail.com",
          password: hashedPassword,
          firstName: "Lior",
          lastName: "Kirshner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Users",
      {
        email: "liorkk7@gmail.com",
      },
      {}
    );
  },
};
