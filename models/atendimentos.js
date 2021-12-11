const conexao = require('../db/conection')
const moment = require('moment')

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment(new Date()).format()
    const data = moment(atendimento.data).format('YYYY-MM-DD HH:mm:ss')

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
    const nomeEhValido = atendimento.cliente.length >= 5

    const validacoes = [
      {
        campo: 'data',
        valido: dataEhValida,
        message: 'Esta não é uma Data Válida'
      },
      {
        campo: 'nome',
        valido: nomeEhValido,
        message: 'O nome deve ter mais que 5 caracteres'
      }
    ]

    const erro = validacoes.filter(campo => !campo.valido)

    if (erro.length) {
      res.status(400).json(erro)
    } else {
      const atendimentoDatado = { ...atendimento, data, dataCriacao}
      const sql = `INSERT INTO Atendimentos SET ?`
  
      conexao.query(sql, atendimentoDatado, (error, result) => {
        if (error) res.status(400).json(error);
        res.status(201).json(result)
      })
    }
  }

  buscaTodos(res){
    const sql = `SELECT * FROM Atendimentos`

    conexao.query(sql, (error, result) => {
      if (error) res.json(error);
      res.status(200).json(result)
    })
  }
}

module.exports = new Atendimento