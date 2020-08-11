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
    TOOL_NOT_FOUND: {
        code: 'tool/not_found',
        message: 'Tool not found'
    } as iError,
    CREATE_USER_ERROR: {
        code: 'user/create',
        message: 'Error creating user'
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
    UNAUTHORIZED_ERROR: {
        code: 'auth/not_authorized',
        message: 'Wrong email or password'
    } as iError,
    TOKEN_NOT_SENT_ERROR: {
        code: 'auth/token_not_sent',
        message: 'X-Access-Token is required'
    } as iError,
    TOKEN_VERIFY_ERROR: {
        code: 'auth/token_verify_error',
        message: 'Error verifying token'
    } as iError,
    USER_NOT_FOUND: {
        code: 'user/not_found',
        message: 'User not found'
    } as iError,
}