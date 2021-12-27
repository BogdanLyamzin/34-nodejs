const {BadRequest} = require("http-errors");

const validation = (schema)=> {
    const func = (req, res, next) => {
        const {error} = schema.validate(req.body);
        if(error){
            const errorResponse = new BadRequest(error.message);
            next(errorResponse);
        }
        next();
    }

    return func;
}

module.exports = validation;