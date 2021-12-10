const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(21047, () => console.log('Servidor rodando na porta 21047'))