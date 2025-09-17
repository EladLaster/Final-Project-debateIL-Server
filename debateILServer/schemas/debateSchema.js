const debateSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    topic: { type: "string", minLength: 3, maxLength: 200 },
    start_time: { type: "string", format: "date-time" },
    end_time: { type: ["string", "null"], format: "date-time" },
    status: { type: "string", enum: ["scheduled", "live", "finished"], default: "scheduled" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" }
  },
  required: ["topic", "start_time", "status"], // end_time can be null
  additionalProperties: false
};

module.exports = debateSchema;
