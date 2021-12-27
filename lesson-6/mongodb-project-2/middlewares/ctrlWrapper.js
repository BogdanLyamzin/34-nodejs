const ctrlWrapper = (ctrl)=> {
    const func = async(req, res, next)=> {
        try {
            await ctrl(req, res);
        } catch (error) {
            if(error.message.includes("Cast to ObjectId failed")){
                error.status = 404;
            }
            if(error.message.includes("validation failed")){
                error.status = 400;
            }
            next(error);
        }
    }
    return func;
}

module.exports = ctrlWrapper;