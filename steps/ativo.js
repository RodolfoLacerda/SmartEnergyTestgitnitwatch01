const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

const ativo = client.page.ativo()

Given('que acesso a tela de cadastro de um ativo', function () {
    return ativo.with()
  });

Given('informo todos os dados para realizar o cadastro', function (dataTable) {
    let ativo = client.page.ativo()

    data = dataTable.hashes();

    data.map(valor => {
      return ativo
        .pause(3000)
        .informarempresa(valor.empresa)
        .informarperfilassociado(valor.associado)
        .informarcodigosiga(valor.codigo)
        .informarselecionarsubmercado(valor.submercado)
        
    })
  });