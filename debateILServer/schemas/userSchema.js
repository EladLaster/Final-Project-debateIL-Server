const userSchema = {
  type: "object",
  properties: {
    id: { type: "string", format: "uuid" },
    username: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z0-9_]+$",
    },
    email: {
      type: "string",
      format: "email",
      maxLength: 255,
    },
    password: {
      type: "string",
      minLength: 8,
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}$",
    },
    firstName: {
      type: "string",
      minLength: 2,
      maxLength: 50,
      pattern: "^[a-zA-Z\\s\\-']+$",
    },
    lastName: {
      type: "string",
      minLength: 2,
      maxLength: 50,
      pattern: "^[a-zA-Z\\s\\-']+$",
    },
    gender: {
      type: "string",
      enum: ["male", "female", "other", "prefer_not_to_say"],
    },
    avatarUrl: {
      type: "string",
      format: "uri",
      maxLength: 500,
    },
    createdAt: { type: "string", format: "date-time" },
    updatedAt: { type: "string", format: "date-time" },
  },
  required: ["username", "email", "password", "firstName", "lastName"],
  additionalProperties: false,
};

const userLoginSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      maxLength: 255,
    },
    password: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["email", "password"],
  additionalProperties: false,
};

const userUpdateSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z0-9_]+$",
    },
    email: {
      type: "string",
      format: "email",
      maxLength: 255,
    },
    firstName: {
      type: "string",
      minLength: 2,
      maxLength: 50,
      pattern: "^[a-zA-Z\\s\\-']+$",
    },
    lastName: {
      type: "string",
      minLength: 2,
      maxLength: 50,
      pattern: "^[a-zA-Z\\s\\-']+$",
    },
    gender: {
      type: "string",
      enum: ["male", "female", "other", "prefer_not_to_say"],
    },
    avatarUrl: {
      type: "string",
      format: "uri",
      maxLength: 500,
    },
  },
  additionalProperties: false,
};

module.exports = {
  userSchema,
  userLoginSchema,
  userUpdateSchema,
};
