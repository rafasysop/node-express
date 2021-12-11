class Tabelas {
  init(conexao) {
    this.conexao = conexao

    this.criarAtendimentos()
  }

  criarAtendimentos() {
    const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT,
      cliente varchar(50) NOT NULL, pet varchar(30), serviço varchar(30) NOT NULL,
      status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(ID))`
    this.conexao.query(sql, (error) => {
      if (error) console.log(error)
      else console.log('Tabela Atendimentos Criada com sucesso!');
    })
  }

}

module.exports = new Tabelas