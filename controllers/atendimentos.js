const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.json({ name: 'Rafael Moura' }))

    app.post('/atendimentos', (req, res) => {
        Atendimento.adiciona(req.body)
        res.send(req.body)
    })
     
     
}