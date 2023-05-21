const notFound = (req, res, next)=>{
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const erroHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.message === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        messsage = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export {
    notFound,
    erroHandler
}