const serverError = res => {
    res.status(500).json({error:"Server Error"})
}

module.exports = serverError
