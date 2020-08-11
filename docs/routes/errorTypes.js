/**
 * @typedef CreateUserError
 * @property {string} code.required Código do erro - eg: user/create
 * @property {string} message.required Mensagem de erro - eg: Error creating user
 */

/**
 * @typedef CreateToolError
 * @property {string} code.required Código do erro - eg: tool/create
 * @property {string} message.required Mensagem de erro - eg: Error creating tool
 */

/**
 * @typedef DeleteToolError
 * @property {string} code.required Código do erro - eg: tool/delete
 * @property {string} message.required Mensagem de erro - eg: Error deleting tool
 */

/**
 * @typedef ToolNotFoundError
 * @property {string} code.required Código do erro - eg: tool/not_found
 * @property {string} message.required Mensagem de erro - eg: Tool not found
 */

/**
 * @typedef ListToolError
 * @property {string} code.required Código do erro - eg: tool/list
 * @property {string} message.required Mensagem de erro - eg: Error listing tool
 */

/**
 * @typedef MissingFieldError
 * @property {string} code.required Código do erro - eg: field_missing
 * @property {string} message.required Mensagem de erro - eg: Missing field ${field}
 */

/**
 * @typedef WrongFieldTypeError
 * @property {string} code.required Código do erro - eg: wrong_field_type
 * @property {string} message.required Mensagem de erro - eg: Field ${field} has wrong type
 */

/**
 * @typedef BodyIsEmptyError
 * @property {string} code.required Código do erro - eg: req/empty_body
 * @property {string} message.required Mensagem de erro - eg: Body is empty
 */

/**
 * @typedef UserNotFoundError
 * @property {string} code.required Código do erro - eg: user/not_found
 * @property {string} message.required Mensagem de erro - eg: User not found
 */

/**
 * @typedef UnauthorizedError
 * @property {string} code.required Código do erro - eg: auth/not_authorized
 * @property {string} message.required Mensagem de erro - eg: Wrong email or password
 */

/**
 * @typedef TokenNotSentError
 * @property {string} code.required Código do erro - eg: auth/token_not_sent
 * @property {string} message.required Mensagem de erro - eg: X-Access-Token is required
 */

/**
 * @typedef TokenVerifyError
 * @property {string} code.required Código do erro - eg: auth/token_verify_error
 * @property {string} message.required Mensagem de erro - eg: Error verifying token
 */