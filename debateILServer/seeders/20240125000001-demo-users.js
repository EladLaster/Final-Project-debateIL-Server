"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    // Hash password for all users
    const hashedPassword = await bcrypt.hash("password123", 10);

    const users = [
      {
        id: "11111111-1111-1111-1111-111111111111",
        username: "alexcohen",
        email: "alex.cohen@example.com",
        password: hashedPassword,
        firstName: "Alex",
        lastName: "Cohen",
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
      {
        id: "66666666-6666-6666-6666-666666666666",
        username: "jessicaweiss",
        email: "jessica.weiss@example.com",
        password: hashedPassword,
        firstName: "Jessica",
        lastName: "Weiss",
        createdAt: new Date("2024-01-20 13:20:00"),
        updatedAt: new Date("2024-01-20 13:20:00"),
      },
      {
        id: "77777777-7777-7777-7777-777777777777",
        username: "danielrosen",
        email: "daniel.rosen@example.com",
        password: hashedPassword,
        firstName: "Daniel",
        lastName: "Rosen",
        createdAt: new Date("2024-01-21 08:45:00"),
        updatedAt: new Date("2024-01-21 08:45:00"),
      },
      {
        id: "88888888-8888-8888-8888-888888888888",
        username: "emmaschwartz",
        email: "emma.schwartz@example.com",
        password: hashedPassword,
        firstName: "Emma",
        lastName: "Schwartz",
        createdAt: new Date("2024-01-22 15:10:00"),
        updatedAt: new Date("2024-01-22 15:10:00"),
      },
      {
        id: "99999999-9999-9999-9999-999999999999",
        username: "jonathankatz",
        email: "jonathan.katz@example.com",
        password: hashedPassword,
        firstName: "Jonathan",
        lastName: "Katz",
        createdAt: new Date("2024-01-23 12:00:00"),
        updatedAt: new Date("2024-01-23 12:00:00"),
      },
      {
        id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
        username: "lisastein",
        email: "lisa.stein@example.com",
        password: hashedPassword,
        firstName: "Lisa",
        lastName: "Stein",
        createdAt: new Date("2024-01-24 17:30:00"),
        updatedAt: new Date("2024-01-24 17:30:00"),
      },
    ];

    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
