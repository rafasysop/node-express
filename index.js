const customExpress = require('./config/customExpress')
const conexao = require('./db/conection')
const Tabelas = require('./db/tables')
const ngrok = require('ngrok');

conexao.connect((error) => {
  if (error) console.log(error)
  else {
    console.log('conectado com sucesso in mysql');
    Tabelas.init(conexao)
    const app = customExpress()

    const porta = process.env.PORT_APP || 21047
    
    app.listen(porta, () => console.log(`Servidor rodando na porta.: ${porta}`))
  }
})
