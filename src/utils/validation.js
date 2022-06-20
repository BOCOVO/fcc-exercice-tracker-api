/**
 * Return 422 error when validation fail
 * 
 * @param {*} model 
 * @param {*} res 
 * @param {*} next 
 */
const validation = (model, res, next) => {
    const error = model.validateSync()
    if (error) {
        // get invalided path with error description
        const errorBag = {}
        for (const path in error.errors) {
            if (Object.hasOwnProperty.call(error.errors, path)) {
                errorBag[path] = error.errors[path].message;
            }
        }
        // return 422 (Unprocessable Entity) error
        res.status(422).json(errorBag)
    } else next()
}

module.exports = validation
