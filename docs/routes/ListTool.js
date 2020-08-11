/**
 * Rota para listagem de ferramentas
 * @route GET /tools
 * @param {string} tag.query - Tag a ser filtrada
 * @group Tools - Manipulações de ferramenta
 * @operationId listTool
 * @produces application/json
 * @consumes application/json
 * @returns {Array.<OutputTool>} 200 - Array de ferramentas
 * @returns {TokenNotSentError.model} 401 - Token requerido
 * @returns {TokenVerifyError.model} 500 - Erro ao validar token (token inválido)
 * @returns {ListToolError.model} 400 - Erro ao listar ferramentas
 * @security JWT
 */