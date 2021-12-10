const customExpress = require('./config/customExpress')

const app = customExpress()

const porta = process.env.PORT_APP || 3005

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))