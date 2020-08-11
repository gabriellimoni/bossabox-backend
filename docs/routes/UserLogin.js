/**
 * @typedef Login
 * @property {string} email.required - Email do usuário - eg: gabrielblimoni@gmail.com
 * @property {string} password.required - Senha do usuário - eg: gabriel123
 */

/**
 * @typedef LoggedUser
 * @property {string} _id - Id do usuário - eg: 5f31f505ee6459000aa594c1
 * @property {string} name - Nome do usuário - eg: Gabriel B. Limoni
 * @property {string} email - Email do usuário - eg: gabrielblimoni@gmail.com
 * @property {string} token - Token do usuário (expira em 5 minutos) - eg: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQHRlc3RlLmNvbSIsImlhdCI6MTU5NzE4MzExMywiZXhwIjoxNTk3MTgzNDEzfQ._wMGM2o27Mv7MhZE2e_ewYtDy5pwNNXvV7m35KIEEsQ
 * @property {number} __v - Versão (controle mongoose) - eg: 1
 */

/**
 * Rota para realizar login
 * @route POST /login
 * @param {Login.model} login.body.required - Email e senha para logar
 * @group User - Manipulações de usuário
 * @operationId loginUser
 * @produces application/json
 * @consumes application/json
 * @returns {LoggedUser.model} 200 - Dados do usuário e token
 * @returns {UserNotFoundError.model} 404 - Usuário não encontrado pelo e-mail
 * @returns {UnauthorizedError.model} 401 - Senha ou e-mail inválidos
 */