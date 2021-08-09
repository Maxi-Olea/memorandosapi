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

const createMemorando = async (req, res) => {
    console.log("create memorando: ", req.body)
    const memoData = {
        message: req.body.message,
        remitente: req.body.remitente,
        date: Date()
    }
    console.log("Memo data con la fecha agregada antes de la insercion: ", memoData)
    const newMemo = await memorandosService.createMemorando(memoData)
    console.log("New Memo after creation: ", JSON.stringify(newMemo))
    const destinatario = {
        destinatario: req.body.destinatario,
        idmemorando: newMemo.id
    }
    await memorandosService.linkToDestinatario(destinatario)
    return res.status(201).json(newMemo)
}

const deleteMemorando = async (req, res) => {
    console.log('Memorandos Controller,- delete by id: ')
    const {id} = req.params
    console.log("Delete Memorando by id: " + id)
    const deleted = await memorandosService.deleteMemorando(id)
    console.log("response controller " + JSON.stringify(deleted))
    return res.status(200).json(deleted)
}


module.exports = {
    getById,
    getSentById,
    createMemorando,
    deleteMemorando
}