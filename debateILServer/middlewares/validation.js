const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const {
  debateSchema,
  debateCreateSchema,
  debateUpdateSchema,
} = require("../schemas/debateSchema");
const {
  userSchema,
  userLoginSchema,
  userUpdateSchema,
} = require("../schemas/userSchema");
const {
  argumentSchema,
  argumentCreateSchema,
} = require("../schemas/argumentSchema");
const { voteSchema, voteCreateSchema } = require("../schemas/voteSchema");

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Debate validators
const validateDebate = ajv.compile(debateSchema);
const validateDebateCreate = ajv.compile(debateCreateSchema);
const validateDebateUpdate = ajv.compile(debateUpdateSchema);

// User validators
const validateUser = ajv.compile(userSchema);
const validateUserLogin = ajv.compile(userLoginSchema);
const validateUserUpdate = ajv.compile(userUpdateSchema);

// Argument validators
const validateArgument = ajv.compile(argumentSchema);
const validateArgumentCreate = ajv.compile(argumentCreateSchema);

// Vote validators
const validateVote = ajv.compile(voteSchema);
const validateVoteCreate = ajv.compile(voteCreateSchema);

// Generic validation function
function createValidation(validator) {
  return (req, res, next) => {
    const valid = validator(req.body);
    if (valid) {
      return next();
    }

    const errors = validator.errors || [];

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.map((e) => ({
        field:
          e.params?.missingProperty ||
          e.instancePath?.replace("/", "") ||
          "unknown",
        message: e.message,
      })),
    });
  };
}

// Specific validation functions
const validateDebateCreateMiddleware = createValidation(validateDebateCreate);
const validateDebateUpdateMiddleware = createValidation(validateDebateUpdate);
const validateUserRegisterMiddleware = createValidation(validateUser);
const validateUserLoginMiddleware = createValidation(validateUserLogin);
const validateUserUpdateMiddleware = createValidation(validateUserUpdate);
const validateArgumentCreateMiddleware = createValidation(
  validateArgumentCreate
);
const validateVoteCreateMiddleware = createValidation(validateVoteCreate);

// Legacy functions for backward compatibility
const validation = validateDebateCreateMiddleware;
const validationPut = validateDebateUpdateMiddleware;

module.exports = {
  // Legacy exports
  validation,
  validationPut,

  // New specific validators
  validateDebateCreate: validateDebateCreateMiddleware,
  validateDebateUpdate: validateDebateUpdateMiddleware,
  validateUserRegister: validateUserRegisterMiddleware,
  validateUserLogin: validateUserLoginMiddleware,
  validateUserUpdate: validateUserUpdateMiddleware,
  validateArgumentCreate: validateArgumentCreateMiddleware,
  validateVoteCreate: validateVoteCreateMiddleware,
};
