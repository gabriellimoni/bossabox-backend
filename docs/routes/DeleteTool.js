/**
 * Rota para apagar ferramentas
 * @route DELETE /tools/{id}
 * @param {string} id.path.required - Tag a ser deletada
 * @group Tools - Manipulações de ferramenta
 * @operationId deleteTool
 * @produces application/json
 * @consumes application/json
 * @returns 204 - Deletado com sucesso
 * @returns {TokenNotSentError.model} 401 - Token requerido
 * @returns {DeleteToolError.model} 400 - Erro ao deletar ferramentas
 * @returns {ToolNotFoundError.model} 404 - Ferramenta não encontrada
 * @security JWT
 */