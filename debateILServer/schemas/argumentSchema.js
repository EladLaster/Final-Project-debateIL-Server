const argumentSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    content: {
      type: "string",
      minLength: 5,
      maxLength: 1000,
    },
    debate_id: { type: "integer" },
    author_id: { type: "string", format: "uuid" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
  required: ["content", "debate_id", "author_id"],
  additionalProperties: false,
};

const argumentCreateSchema = {
  type: "object",
  properties: {
    text: {
      type: "string",
      minLength: 5,
      maxLength: 1000,
    },
  },
  required: ["text"],
  additionalProperties: false,
};

module.exports = {
  argumentSchema,
  argumentCreateSchema,
};
