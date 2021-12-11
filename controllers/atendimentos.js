const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', async (req, res) => {
        Atendimento.buscaTodos()
        res.json({ teste: 'req' })
    })

    app.post('/atendimentos', (req, res) => {
        Atendimento.adiciona(req.body)
        res.send(req.body)
    })
}