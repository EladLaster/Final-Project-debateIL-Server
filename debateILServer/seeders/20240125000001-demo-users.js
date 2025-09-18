"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    // Hash password for all users
    const hashedPassword = await bcrypt.hash("password123", 10);

    const users = [
      {
        id: "11111111-1111-1111-1111-111111111111",
        username: "liorkk7",
        email: "lior.kirshner@gmail.com",
        password: hashedPassword,
        firstName: "Lior",
        lastName: "Kirshner",
        createdAt: new Date("2024-01-15 10:30:00"),
        updatedAt: new Date("2024-01-15 10:30:00"),
      },
      {
        id: "22222222-2222-2222-2222-222222222222",
        username: "sarahlevi",
        email: "sarah.levi@example.com",
        password: hashedPassword,
        firstName: "Sarah",
        lastName: "Levi",
        createdAt: new Date("2024-01-16 14:20:00"),
        updatedAt: new Date("2024-01-16 14:20:00"),
      },
      {
        id: "33333333-3333-3333-3333-333333333333",
        username: "davidmizrahi",
        email: "david.mizrahi@example.com",
        password: hashedPassword,
        firstName: "David",
        lastName: "Mizrahi",
        createdAt: new Date("2024-01-17 09:15:00"),
        updatedAt: new Date("2024-01-17 09:15:00"),
      },
      {
        id: "44444444-4444-4444-4444-444444444444",
        username: "rachelgoldberg",
        email: "rachel.goldberg@example.com",
        password: hashedPassword,
        firstName: "Rachel",
        lastName: "Goldberg",
        createdAt: new Date("2024-01-18 16:45:00"),
        updatedAt: new Date("2024-01-18 16:45:00"),
      },
      {
        id: "55555555-5555-5555-5555-555555555555",
        username: "michaelbenjamin",
        email: "michael.benjamin@example.com",
        password: hashedPassword,
        firstName: "Michael",
        lastName: "Benjamin",
        createdAt: new Date("2024-01-19 11:30:00"),
        updatedAt: new Date("2024-01-19 11:30:00"),
      },
    ];

    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
