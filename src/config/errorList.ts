interface iError {
    message: string,
    code: string,
}

export default {
    CREATE_TOOL_ERROR: {
        code: 'tool/create',
        message: 'Error creating tool'
    } as iError,
    LIST_TOOLS_ERROR: {
        code: 'tool/list',
        message: 'Error listing tool'
    } as iError,
    DELETE_TOOL_ERROR: {
        code: 'tool/delete',
        message: 'Error deleting tool'
    } as iError,
    BODY_IS_EMPTY: {
        code: 'req/empty_body',
        message: 'Body is empty'
    } as iError,
    MISSING_FIELD: (field: string): iError => {
        return {
            code: 'field_missing',
            message: `Missing field ${field}`
        } as iError
    },
    WRONG_FIELD_TYPE: (field: string): iError => {
        return {
            code: 'wrong_field_type',
            message: `Field ${field} has wrong type`,
        } as iError
    },
}