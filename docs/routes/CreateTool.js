/**
 * @typedef OutputTool
 * @property {string} _id - Id da ferramenta - eg: 5f31f505ee6459000aa594c1
 * @property {string} title - Nome da ferramenta - eg: Ferramenta Louca
 * @property {string} link - Link para a ferramenta - eg: https://www.google.com
 * @property {string} description - Descrição da ferramenta - eg: Descrição da ferramenta muito doida
 * @property {Array.<string>} tags - Link para a ferramenta
 * @property {number} __v - Versão (controle mongoose) - eg: 1
 */

/**
 * @typedef InputTool
 * @property {string} title.required - Nome da ferramenta - eg: Ferramenta Louca
 * @property {string} link.required - Link para a ferramenta - eg: https://www.google.com
 * @property {string} description.required - Descrição da ferramenta - eg: Descrição da ferramenta muito doida
 * @property {Array.<string>} tags.required - Link para a ferramenta
 */

/**
 * Rota para criação de ferramenta
 * @route POST /tools
 * @param {InputTool.model} user.body.required - Dados da ferramenta a ser criada
 * @group Tools - Manipulações de ferramenta
 * @operationId createTool
 * @produces application/json
 * @consumes application/json
 * @returns {OutputTool.model} 201 - Ferramenta criada com ID e versão
 * @returns {TokenNotSentError.model} 401 - Token requerido
 * @returns {TokenVerifyError.model} 500 - Erro ao validar token (token inválido)
 * @returns {CreateToolError.model} 400.1 - Erro ao criar ferramenta
 * @returns {MissingFieldError.model} 400.2 - Campo requerido não existente
 * @returns {WrongFieldTypeError.model} 400.3 - Campo com tipo errado
 * @returns {BodyIsEmptyError.model} 400.4 - Sem corpo da requisição
 * @security JWT
 */