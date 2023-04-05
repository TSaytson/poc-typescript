function emailConflict() {
    return {
        name: "Email Conflict",
        message: "Email already in use",
        status: 409
    }
}

function unprocessableEntity() {
    return {
        name: "Unprocessable Entity",
        message: "Couldn't log you in",
        status: 422
    }
}

export const loginErrors = {
    emailConflict,
    unprocessableEntity
}