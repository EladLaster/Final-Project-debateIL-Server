const debateSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    topic: { type: "string", minLength: 10, maxLength: 200 },
    start_time: { type: "string", format: "date-time" },
    end_time: { type: ["string", "null"], format: "date-time" },
    status: {
      type: "string",
      enum: ["scheduled", "live", "finished"],
      default: "scheduled",
    },
    user1_id: { type: ["string", "null"], format: "uuid" },
    user2_id: { type: ["string", "null"], format: "uuid" },
    score_user1: { type: ["integer", "null"], minimum: 0 },
    score_user2: { type: ["integer", "null"], minimum: 0 },
    end_reason: {
      type: ["string", "null"],
      enum: ["user_ended", "inactivity_timeout", "admin_ended", null],
    },
    last_argument_time: { type: ["string", "null"], format: "date-time" },
    last_vote_time: { type: ["string", "null"], format: "date-time" },
    last_activity_time: { type: ["string", "null"], format: "date-time" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
  required: ["topic", "start_time", "status"],
  additionalProperties: false,
};

const debateCreateSchema = {
  type: "object",
  properties: {
    topic: { type: "string", minLength: 10, maxLength: 200 },
    start_time: { type: "string", format: "date-time" },
    end_time: { type: ["string", "null"], format: "date-time" },
    status: { type: "string", enum: ["scheduled", "live", "finished"] },
  },
  required: ["topic", "start_time"],
  additionalProperties: false,
};

const debateUpdateSchema = {
  type: "object",
  properties: {
    topic: { type: "string", minLength: 10, maxLength: 200 },
    start_time: { type: "string", format: "date-time" },
    end_time: { type: ["string", "null"], format: "date-time" },
    status: { type: "string", enum: ["scheduled", "live", "finished"] },
    score_user1: { type: ["integer", "null"], minimum: 0 },
    score_user2: { type: ["integer", "null"], minimum: 0 },
    end_reason: {
      type: ["string", "null"],
      enum: ["user_ended", "inactivity_timeout", "admin_ended", null],
    },
  },
  additionalProperties: false,
};

module.exports = {
  debateSchema,
  debateCreateSchema,
  debateUpdateSchema,
};
