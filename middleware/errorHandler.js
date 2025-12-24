export default function errorHandler(err, req, res, next) {
    
    res.status(err.status || 404).send(err.msg && "inishilaz error")
}