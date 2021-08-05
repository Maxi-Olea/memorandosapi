const memorandosService = require("../services/memorandosService")

const getById = async (req,res) => {
    console.log("params: ", req.params);
    const params = req.params
    const userId = params.id
    const memos = await memorandosService.getById(userId);
    console.log("response controller "+ JSON.stringify(memos))
    return res.status(200).json(memos)
}

const getSentById = async (req, res) => {
    console.log("params en memorandos.controller: ", req.params);
    const userId = req.params.id;
    const memos = await memorandosService.getSentById(userId)
    console.log("response controller: ", JSON.stringify(memos))
    return res.status(200).json(memos)
}

module.exports = {
    getById,
    getSentById
}