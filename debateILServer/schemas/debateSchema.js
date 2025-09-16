const debateSchema = {
  type: "object",
  properties: {
    id: { type: "string" }, // אם נוצר אוטומטית ב-DB אפשר לא לכלול
    topic: { type: "string", minLength: 3, maxLength: 200 },
    start_time: { type: "string", format: "date-time" },
    end_time: { type: "string", format: "date-time" },
    status: { type: "string", enum: ["upcoming", "ongoing", "finished"], default: "upcoming" },
    userId: { type: "string", format: "uuid" },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" }
  },
  required: ["topic", "start_time", "end_time", "status", "userId"],
  additionalProperties: false
};

module.exports = debateSchema;
