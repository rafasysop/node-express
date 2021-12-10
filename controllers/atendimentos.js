module.exports = app => {
    app.get('/atendimentos', (req, res) => res.json({ name: 'Rafael Moura' }))

    app.post('/atendimentos', (req, res) => {
        console.log('Atendimento enviado')
        console.log(req.body)
        res.send('Post atendimento')
    })
     
     
}