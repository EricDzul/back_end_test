
const errorsHandlers = (req, res, next) => {
res.status(404).send({ "message": "Not Found" });
}

module.exports = errorsHandlers;