/**
 * @typedef OutputUser
 * @property {string} _id - Id do usuário - eg: 5f31f505ee6459000aa594c1
 * @property {string} name - Nome do usuário - eg: Gabriel B. Limoni
 * @property {string} email - Email do usuário - eg: gabrielblimoni@gmail.com
 * @property {number} __v - Versão (controle mongoose) - eg: 1
 */

/**
 * @typedef InputUser
 * @property {string} name.required - Nome do usuário - eg: Gabriel B. Limoni
 * @property {string} email.required - Email do usuário - eg: gabrielblimoni@gmail.com
 * @property {string} password.required - Senha do usuário - eg: gabriel123
 */

/**
 * Rota para criação de usuário
 * @route POST /user
 * @param {InputUser.model} user.body.required - Dados do usuário a ser criado
 * @group User - Manipulações de usuário
 * @operationId createUser
 * @produces application/json
 * @consumes application/json
 * @returns {OutputUser.model} 201 - Usuário criado com ID e versão
 * @returns {CreateUserError.model} 400 - Erro ao criar usuário
 */