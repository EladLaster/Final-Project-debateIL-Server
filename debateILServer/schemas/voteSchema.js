const voteSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    debate_id: { type: "integer" },
    user_id: { type: "string", format: "uuid" },
    voted_for: {
      type: "string",
      enum: ["user1", "user2"],
    },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
  required: ["debate_id", "user_id", "voted_for"],
  additionalProperties: false,
};

const voteCreateSchema = {
  type: "object",
  properties: {
    voted_for: {
      type: "string",
      enum: ["user1", "user2"],
    },
  },
  required: ["voted_for"],
  additionalProperties: false,
};

module.exports = {
  voteSchema,
  voteCreateSchema,
};
