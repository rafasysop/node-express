const conexao = require('../db/conection')

class Atendimento {
  adiciona(atendimento) {
    const dataCriacao = new Date()
    const atendimentoDatado = { ...atendimento, dataCriacao}
    const sql = `INSERT INTO Atendimentos SET ?`

    conexao.query(sql, atendimentoDatado, (error) => {
      if (error) console.log(error);
      console.log(`Criado Atendimento: ${atendimento}`)
    })
  }

  async buscaTodos(){
    const sql = `SELECT * FROM Atendimentos`

    await conexao.query(sql, (error, result) => {
      if (error) console.log(error);
      console.log(result)
    })
  }
}

module.exports = new Atendimento