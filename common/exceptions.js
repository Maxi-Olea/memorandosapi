const exceptionType = {
    unhandledException:{
        code: 200,
        message: "Unhandled exception",
        httpStatus: 500
    },
    notFound:{
        code: 300,
        message: "Not found",
        httpStatus: 404
    },
    paises:{
        notFound: {
            code: 1000,
            message: "Country not found",
            httpStatus: 404
        },
    },
    cities: {
        notFound: {
            code: 1000,
            message: "City not found",
            httpStatus: 404
        }
    },
    // code of users 100
    users : {
        invalidPassword: {
            code: 100,
            message: "Password did not match",
            httpStatus: 401
        },
        cannotCreateUser: {
            code: 101,
            message: "User can not be created",
            httpStatus: 500
        },
        notFound: {
            code: 102,
            message: "User not found",
            httpStatus: 404
        },
    },
    database: {
        entity: {
            canNotBeCreated:{
                code: 400,
                message: "Entity can not be created",
                httpStatus: 500
            },
            canNotBeUpdated:{
                code: 400,
                message: "Entity can not be updated",
                httpStatus: 500
            },
            canNotBeDeleted:{
                code: 400,
                message: "Entity can not be deleted",
                httpStatus: 500
            }
        }
    }
}

module.exports = {
    exceptionType
}