const conexao = require('../db/conection')

class Atendimento {
  adiciona(atendimento) {
    const sql = `INSERT INTO Atendimentos SET ?`

    conexao.query(sql, atendimento, (error) => {
      if (error) console.log(error);
      console.log(`Criado Atendimento: ${atendimento}`)
    })
  }

  remove(){

  }
}

module.exports = new Atendimento