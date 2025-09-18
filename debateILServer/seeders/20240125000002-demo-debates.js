"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const debates = [
      // Live debates (currently happening)
      {
        id: 1,
        topic: "האם בינה מלאכותית תחליף מורים בבתי ספר?",
        status: "live",
        start_time: new Date("2024-01-25 14:00:00"),
        end_time: new Date("2024-01-25 15:30:00"),
        user1_id: "11111111-1111-1111-1111-111111111111", // Lior
        user2_id: "22222222-2222-2222-2222-222222222222", // Sarah
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 13:45:00"),
        updatedAt: new Date("2024-01-25 13:45:00"),
      },
      {
        id: 2,
        topic: "האם עבודה מהבית טובה יותר מעבודה במשרד?",
        status: "live",
        start_time: new Date("2024-01-25 16:00:00"),
        end_time: new Date("2024-01-25 17:30:00"),
        user1_id: "33333333-3333-3333-3333-333333333333", // David
        user2_id: "44444444-4444-4444-4444-444444444444", // Rachel
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 15:45:00"),
        updatedAt: new Date("2024-01-25 15:45:00"),
      },

      // Scheduled debates (available for registration)
      {
        id: 3,
        topic: "האם צריך להסדיר את הרשתות החברתיות על ידי הממשלה?",
        status: "scheduled",
        start_time: new Date("2024-01-26 10:00:00"),
        end_time: new Date("2024-01-26 11:30:00"),
        user1_id: "55555555-5555-5555-5555-555555555555", // Michael
        user2_id: null,
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 20:00:00"),
        updatedAt: new Date("2024-01-25 20:00:00"),
      },
      {
        id: 4,
        topic: "האם קריפטו הוא העתיד של הכסף?",
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
        topic: "האם צריך ליישב את מאדים?",
        status: "scheduled",
        start_time: new Date("2024-01-27 09:00:00"),
        end_time: new Date("2024-01-27 10:30:00"),
        user1_id: "11111111-1111-1111-1111-111111111111", // Lior
        user2_id: null,
        score_user1: 0,
        score_user2: 0,
        createdAt: new Date("2024-01-25 22:00:00"),
        updatedAt: new Date("2024-01-25 22:00:00"),
      },

      // Finished debates (with winners)
      {
        id: 6,
        topic: "האם שינוי האקלים הוא האיום הגדול ביותר על האנושות?",
        status: "finished",
        start_time: new Date("2024-01-24 10:00:00"),
        end_time: new Date("2024-01-24 11:30:00"),
        user1_id: "22222222-2222-2222-2222-222222222222", // Sarah
        user2_id: "33333333-3333-3333-3333-333333333333", // David
        score_user1: 3,
        score_user2: 2,
        createdAt: new Date("2024-01-24 09:45:00"),
        updatedAt: new Date("2024-01-24 09:45:00"),
      },
      {
        id: 7,
        topic: "האם צריך להנהיג הכנסה בסיסית אוניברסלית?",
        status: "finished",
        start_time: new Date("2024-01-24 14:00:00"),
        end_time: new Date("2024-01-24 15:30:00"),
        user1_id: "44444444-4444-4444-4444-444444444444", // Rachel
        user2_id: "55555555-5555-5555-5555-555555555555", // Michael
        score_user1: 2,
        score_user2: 3,
        createdAt: new Date("2024-01-24 13:45:00"),
        updatedAt: new Date("2024-01-24 13:45:00"),
      },
      {
        id: 8,
        topic: "האם אנרגיה גרעינית היא הפתרון לשינוי האקלים?",
        status: "finished",
        start_time: new Date("2024-01-23 16:00:00"),
        end_time: new Date("2024-01-23 17:30:00"),
        user1_id: "11111111-1111-1111-1111-111111111111", // Lior
        user2_id: "33333333-3333-3333-3333-333333333333", // David
        score_user1: 4,
        score_user2: 1,
        createdAt: new Date("2024-01-23 15:45:00"),
        updatedAt: new Date("2024-01-23 15:45:00"),
      },
      {
        id: 9,
        topic: "האם הטכנולוגיה הופכת אותנו לבדידים יותר?",
        status: "finished",
        start_time: new Date("2024-01-22 19:00:00"),
        end_time: new Date("2024-01-22 20:30:00"),
        user1_id: "22222222-2222-2222-2222-222222222222", // Sarah
        user2_id: "44444444-4444-4444-4444-444444444444", // Rachel
        score_user1: 3,
        score_user2: 2,
        createdAt: new Date("2024-01-22 18:45:00"),
        updatedAt: new Date("2024-01-22 18:45:00"),
      },
      {
        id: 10,
        topic: "האם צריך לאסור על מכוניות אוטונומיות?",
        status: "finished",
        start_time: new Date("2024-01-21 11:00:00"),
        end_time: new Date("2024-01-21 12:30:00"),
        user1_id: "55555555-5555-5555-5555-555555555555", // Michael
        user2_id: "11111111-1111-1111-1111-111111111111", // Lior
        score_user1: 1,
        score_user2: 4,
        createdAt: new Date("2024-01-21 10:45:00"),
        updatedAt: new Date("2024-01-21 10:45:00"),
      },
    ];

    await queryInterface.bulkInsert("debates", debates, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("debates", null, {});
  },
};
