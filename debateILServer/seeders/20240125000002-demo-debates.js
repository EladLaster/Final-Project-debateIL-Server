"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const debates = [
      // Live debates (currently happening)
      {
        id: 1,
        topic: "Should AI replace human teachers in schools?",
        status: "live",
        start_time: new Date("2024-01-25 14:00:00"),
        end_time: new Date("2024-01-25 15:30:00"),
        user1_id: "11111111-1111-1111-1111-111111111111",
        user2_id: "22222222-2222-2222-2222-222222222222",
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 13:45:00"),
        updatedAt: new Date("2024-01-25 13:45:00"),
      },
      {
        id: 2,
        topic: "Is remote work better than office work?",
        status: "live",
        start_time: new Date("2024-01-25 16:00:00"),
        end_time: new Date("2024-01-25 17:30:00"),
        user1_id: "33333333-3333-3333-3333-333333333333",
        user2_id: "44444444-4444-4444-4444-444444444444",
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 15:45:00"),
        updatedAt: new Date("2024-01-25 15:45:00"),
      },

      // Scheduled debates (available for registration)
      {
        id: 3,
        topic: "Should social media be regulated by governments?",
        status: "scheduled",
        start_time: new Date("2024-01-26 10:00:00"),
        end_time: new Date("2024-01-26 11:30:00"),
        user1_id: "55555555-5555-5555-5555-555555555555",
        user2_id: null,
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 20:00:00"),
        updatedAt: new Date("2024-01-25 20:00:00"),
      },
      {
        id: 4,
        topic: "Is cryptocurrency the future of money?",
        status: "scheduled",
        start_time: new Date("2024-01-26 14:00:00"),
        end_time: new Date("2024-01-26 15:30:00"),
        user1_id: null,
        user2_id: null,
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 21:00:00"),
        updatedAt: new Date("2024-01-25 21:00:00"),
      },
      {
        id: 5,
        topic: "Should we colonize Mars?",
        status: "scheduled",
        start_time: new Date("2024-01-27 09:00:00"),
        end_time: new Date("2024-01-27 10:30:00"),
        user1_id: "66666666-6666-6666-6666-666666666666",
        user2_id: null,
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 22:00:00"),
        updatedAt: new Date("2024-01-25 22:00:00"),
      },

      // Finished debates (with winners)
      {
        id: 6,
        topic: "Is climate change the biggest threat to humanity?",
        status: "finished",
        start_time: new Date("2024-01-24 10:00:00"),
        end_time: new Date("2024-01-24 11:30:00"),
        user1_id: "77777777-7777-7777-7777-777777777777",
        user2_id: "88888888-8888-8888-8888-888888888888",
        score_user1: 3,
        score_user2: 2,
        createdAt: new Date("2024-01-24 09:45:00"),
        updatedAt: new Date("2024-01-24 09:45:00"),
      },
      {
        id: 7,
        topic: "Should we have a universal basic income?",
        status: "finished",
        start_time: new Date("2024-01-24 14:00:00"),
        end_time: new Date("2024-01-24 15:30:00"),
        user1_id: "99999999-9999-9999-9999-999999999999",
        user2_id: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
        score_user1: 2,
        score_user2: 3,
        createdAt: new Date("2024-01-24 13:45:00"),
        updatedAt: new Date("2024-01-24 13:45:00"),
      },
      {
        id: 8,
        topic: "Is nuclear energy the solution to climate change?",
        status: "finished",
        start_time: new Date("2024-01-23 16:00:00"),
        end_time: new Date("2024-01-23 17:30:00"),
        user1_id: "11111111-1111-1111-1111-111111111111",
        user2_id: "33333333-3333-3333-3333-333333333333",
        score_user1: 4,
        score_user2: 1,
        createdAt: new Date("2024-01-23 15:45:00"),
        updatedAt: new Date("2024-01-23 15:45:00"),
      },
    ];

    await queryInterface.bulkInsert("debates", debates, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("debates", null, {});
  },
};
