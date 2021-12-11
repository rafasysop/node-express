const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', async (req, res) => {
        Atendimento.buscaTodos(res)
    })

    app.get('/atendimentos/:id', async (req, res) => {
        Atendimento.buscaId(req.params.id,res)
    })

    app.post('/atendimentos', (req, res) => Atendimento.adiciona(req.body, res))
}