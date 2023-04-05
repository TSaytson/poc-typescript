function emailConflict() {
    return {
        name: "Email Conflict",
        message: "Email already in use",
        status: 409
    }
}

export const errors = {
    emailConflict
}