
const createPopulateOptions = (from, to, limit) => {
    const populateOptions = { path: 'log', select: '-_id -__v' }
    if (from) {
        const fromDate = new Date(from)
        if (fromDate.toString() !== "Invalid Date") {
            populateOptions.match = {date: {$gte:fromDate}}
        }
    }
    if (to) {
        const fromDate = new Date(to)
        if (fromDate.toString() !== "Invalid Date") {
            if(! populateOptions?.match?.date) populateOptions.match = {date:{}}
            populateOptions.match.date["$lte"] = fromDate
        }
    }
    if (limit!=undefined || limit != null) {
        const _limit = Number(limit)
        if (!isNaN(_limit)) {
            populateOptions.perDocumentLimit = _limit
        }
    }
    return populateOptions
}

module.exports = createPopulateOptions