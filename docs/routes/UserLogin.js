/**
 * @typedef Login
 * @property {string} email.required - Email do usuário - eg: gabrielblimoni@gmail.com
 * @property {string} password.required - Senha do usuário - eg: gabriel123
 */

/**
 * @typedef Refresh
 * @property {string} refresh_token.required - Refresh Token - eg: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQHRlc3RlLmNvbSIsImlhdCI6MTU5NzE4MzExMywiZXhwIjoxNTk3MTgzNDEzfQ._wMGM2o27Mv7MhZE2e_ewYtDy5pwNNXvV7m35KIEEsQ
 */

/**
 * @typedef LoggedUser
 * @property {string} _id - Id do usuário - eg: 5f31f505ee6459000aa594c1
 * @property {string} name - Nome do usuário - eg: Gabriel B. Limoni
 * @property {string} email - Email do usuário - eg: gabrielblimoni@gmail.com
 * @property {number} __v - Versão (controle mongoose) - eg: 1
 */

/**
 * @typedef TokenData
 * @property {string} accessToken - Token de acesso - eg: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQHRlc3RlLmNvbSIsImlhdCI6MTU5NzE4MzExMywiZXhwIjoxNTk3MTgzNDEzfQ._wMGM2o27Mv7MhZE2e_ewYtDy5pwNNXvV7m35KIEEsQ
 * @property {number} expiresIn - Tempo em segundos para expiração do accessToken - eg: 300
 * @property {string} refreshToken - Token de acesso - eg: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQHRlc3RlLmNvbSIsImlhdCI6MTU5NzE4MzExMywiZXhwIjoxNTk3MTgzNDEzfQ._wMGM2o27Mv7MhZE2e_ewYtDy5pwNNXvV7m35KIEEsQ
 * @property {number} refreshExpiresIn - Tempo em segundos para expiração do refreshToken - eg: 300
 */

/**
 * @typedef LoginData
 * @property {LoggedUser.model} user - Dados do usuário
 * @property {TokenData.model} token - Dados do token
 */

/**
 * Rota para realizar login
 * @route POST /login
 * @param {Login.model} login.body.required - Email e senha para logar
 * @group User - Manipulações de usuário
 * @operationId loginUser
 * @produces application/json
 * @consumes application/json
 * @returns {LoginData.model} 200 - Dados do usuário e token
 * @returns {UserNotFoundError.model} 404 - Usuário não encontrado pelo e-mail
 * @returns {UnauthorizedError.model} 401 - Senha ou e-mail inválidos
 */

 /**
 * Rota para atualizar os dados do token
 * @route POST /refresh
 * @param {Refresh.model} refresh.body.required - Email e senha para logar
 * @group User - Manipulações de usuário
 * @operationId refreshToken
 * @produces application/json
 * @consumes application/json
 * @returns {TokenData.model} 200 - Dados do token
 * @returns {UserNotFoundError.model} 404 - Usuário não encontrado pelo refresh_token
 */