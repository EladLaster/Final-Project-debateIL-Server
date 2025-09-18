"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const messages = [
      // Messages for live debate 1 (AI vs Teachers)
      {
        id: 1,
        debate_id: 1,
        user_id: "11111111-1111-1111-1111-111111111111",
        text: "AI can provide personalized learning experiences that adapt to each student's pace and style.",
        timestamp: new Date("2024-01-25 14:05:00"),
        createdAt: new Date("2024-01-25 14:05:00"),
        updatedAt: new Date("2024-01-25 14:05:00"),
      },
      {
        id: 2,
        debate_id: 1,
        user_id: "22222222-2222-2222-2222-222222222222",
        text: "But human teachers provide emotional support and mentorship that AI cannot replicate.",
        timestamp: new Date("2024-01-25 14:08:00"),
        createdAt: new Date("2024-01-25 14:08:00"),
        updatedAt: new Date("2024-01-25 14:08:00"),
      },
      {
        id: 3,
        debate_id: 1,
        user_id: "11111111-1111-1111-1111-111111111111",
        text: "AI can analyze vast amounts of data to identify learning gaps and provide targeted interventions.",
        timestamp: new Date("2024-01-25 14:12:00"),
        createdAt: new Date("2024-01-25 14:12:00"),
        updatedAt: new Date("2024-01-25 14:12:00"),
      },
      {
        id: 4,
        debate_id: 1,
        user_id: "22222222-2222-2222-2222-222222222222",
        text: "The human connection in education is irreplaceable. Students need empathy and understanding.",
        timestamp: new Date("2024-01-25 14:15:00"),
        createdAt: new Date("2024-01-25 14:15:00"),
        updatedAt: new Date("2024-01-25 14:15:00"),
      },

      // Messages for live debate 2 (Remote vs Office work)
      {
        id: 5,
        debate_id: 2,
        user_id: "33333333-3333-3333-3333-333333333333",
        text: "Remote work increases productivity by eliminating commute time and office distractions.",
        timestamp: new Date("2024-01-25 16:05:00"),
        createdAt: new Date("2024-01-25 16:05:00"),
        updatedAt: new Date("2024-01-25 16:05:00"),
      },
      {
        id: 6,
        debate_id: 2,
        user_id: "44444444-4444-4444-4444-444444444444",
        text: "Office work fosters better collaboration and spontaneous idea generation.",
        timestamp: new Date("2024-01-25 16:08:00"),
        createdAt: new Date("2024-01-25 16:08:00"),
        updatedAt: new Date("2024-01-25 16:08:00"),
      },
      {
        id: 7,
        debate_id: 2,
        user_id: "33333333-3333-3333-3333-333333333333",
        text: "Remote work offers better work-life balance and reduces stress levels.",
        timestamp: new Date("2024-01-25 16:12:00"),
        createdAt: new Date("2024-01-25 16:12:00"),
        updatedAt: new Date("2024-01-25 16:12:00"),
      },
      {
        id: 8,
        debate_id: 2,
        user_id: "44444444-4444-4444-4444-444444444444",
        text: "Face-to-face interactions build stronger team relationships and company culture.",
        timestamp: new Date("2024-01-25 16:15:00"),
        createdAt: new Date("2024-01-25 16:15:00"),
        updatedAt: new Date("2024-01-25 16:15:00"),
      },
    ];

    await queryInterface.bulkInsert("arguments", messages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("arguments", null, {});
  },
};
