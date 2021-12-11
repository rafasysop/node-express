const conexao = require('../db/conection')
const moment = require('moment')

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment(new Date()).format()
    if (!atendimento.data) return res.status(400).send('Precisamos de uma data valida (YYYY-MM-DD)')
    const data = moment(atendimento.data).format('YYYY-MM-DD HH:mm:ss')

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
    const nomeEhValido = atendimento.cliente.length >= 5

    const validacoes = [
      {
        campo: 'data',
        valido: dataEhValida,
        message: 'Esta não é uma Data Válida (YYYY-MM-DD)'
      },
      {
        campo: 'nome',
        valido: nomeEhValido,
        message: 'O nome deve ter mais que 5 caracteres'
      }
    ]

    const erro = validacoes.filter(campo => !campo.valido)

    if (erro.length) {
      return res.status(400).json(erro)
    } else {
      const atendimentoDatado = { ...atendimento, data, dataCriacao}
      const sql = `INSERT INTO Atendimentos SET ?`
  
      conexao.query(sql, atendimentoDatado, (error, result) => {
        if (error?.code === 'ER_NO_DEFAULT_FOR_FIELD') return res.status(400).json(error.sqlMessage);

        if (error) return res.status(400).json(error);
        return res.status(201).json(result)
      })
    }
  }

  buscaId(id, res){
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    conexao.query(sql, (error, result) => {
      if (error) return res.json(error);
      if (result.length) return res.status(200).json(result)
      return res.status(404).send('Não Existe nenhum Atendimento com esse ID')
    })
  }

  buscaTodos(res){
    const sql = `SELECT * FROM Atendimentos`

    conexao.query(sql, (error, result) => {
      if (error) return res.json(error);
      return res.status(200).json(result)
    })
  }
}

module.exports = new Atendimento