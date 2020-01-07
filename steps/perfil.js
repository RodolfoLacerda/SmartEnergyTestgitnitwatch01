const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

const perfil = client.page.perfil();

Given('acesso a pagina para realizar um cadastro de um perfil', function () {
    return perfil.with()
  });


  Given('informo os dados', function (dataTable) {
    data = dataTable.hashes();
    
    data.map(valor => {
      return perfil
      .informarAgenteAssociado(valor.associado)
      .informarcodigoCEE(valor.codigocee)
      .informarNome(valor.nomecee)
      .informarperfilAgente(valor.nomevale)
      
    })

  });

  Then('solicito para salvar o perfil', function () {
   return perfil
   .pause(3000)
   .salvar()
   
  });

  Then('verifico se o perfil foi salvo {string}', function (mensagem) {
    return perfil
    .confirmarcadastro(mensagem)
  });

  Given('acesso a pagina para realizar pesquisar de perfil', function () {
    return perfil.pesquisarperfil()
  });

  Given('solicito para pesquisar pelo codigocee {string}', function (pesquisarcodigo) {
    return perfil.informarpesquisarcodigo(pesquisarcodigo)
  });

  Given('edito o nome do perfil vale {string}', function (nome) {
    return perfil.editarnome(nome)
  });

  Given('solicito para Inativar', function () {
    return perfil.inativarperfil()
  });

  Given('informo uma justificativa {string}', function (justificativa) {
    return perfil.informarjustificativa(justificativa)
  });

  Given('pesquiso pelo status alpha {string}', function (string) {
    return perfil.selecionarstatus()
  });






