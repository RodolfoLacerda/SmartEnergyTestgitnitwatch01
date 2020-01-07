const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

let empresa = client.page.empresa()

Given('acesso a pagina para realizar um cadastro de empresa', function () {
  let empresa = client.page.empresa()

  return empresa.with()
});




Given('acesso a pagina para realizar um cadastro e informo os dados', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informar(valor.tipoempresa)
      .informarCodigoSap(valor.codigosap)
      .informarRazaoSocial(valor.razaosocial)
      .informarcnpj(valor.cnpj)
      .informarInscricao(valor.inscricaoestadual)
      .informarPais(valor.pais)
      .informarEstado(valor.estado)
      .informarBairro(valor.bairro)
      .informarLogradouro(valor.logradouro)
      .informarNumero(valor.numero)
      .informarComplemento(valor.complemento)
      .informarCep(valor.cep)
      .pause(5000)
      .proximo()

  })
});

Then('solicito para a tela de cadastro de contato', function () {
  return empresa
    .waitForElementVisible('@proximo', 2000)

});

Then('informo os dados para cadastro de contato', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informarnomeContato(valor.nome)
      .informaremailContato(valor.email)
      .informartelefoneFixo(valor.telefonefixo)
      .informartelefoneCelular(valor.telefonecelular)
      .informartipo(valor.tipo)
      .pause(5000)
      .proximo()

  })
});

Then('solicito para a tela de cadastro bancario', function () {
  return empresa
    .waitForElementVisible('@proximo', 2000)
});

Then('informo os dados para cadastro bancario', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informaBanco(valor.banco)
      .informarAgencia(valor.agencia)
      .informarConta(valor.conta)
      .informarTipoconta(valor.tipodeconta)
      .informardadosAdicionais(valor.dadosadicionais)
      .pause(5000)
      .salvarempresa()
      
  })
});

Then('solicito para a tela de revisao', function () {
  return empresa
    .waitForElementVisible('@proximo', 2000)
});

When('solicito para salvar o cadastro da empresa', function () {
  let empresa = client.page.empresa()

  return empresa.salvarempresa()

  
});

Given('acesso a pagina para realizar um cadastro e informo os dados da empresa filial', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informar(valor.tipoempresa)
      .informarCodigoSap(valor.codigosap)
      .informarRazaoSocial(valor.razaosocial)
      .informarcnpj(valor.cnpj)
      .informarInscricao(valor.inscricaoestadual)
      .informarPais(valor.pais)
      .informarEstado(valor.estado)
      .informarBairro(valor.bairro)
      .informarLogradouro(valor.logradouro)
      .informarNumero(valor.numero)
      .informarComplemento(valor.complemento)
      .informarCep(valor.cep)
      .informarCaracteristicas(valor.caracteristicas)
      .pause(5000)
      .proximo()

  })
});


Given('acesso a pagina para realizar um cadastro e informo os dados da empresa interna', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informar(valor.tipoempresa)
      .informarCodigoSap(valor.codigosap)
      .informarRazaoSocial(valor.razaosocial)
      .informarcnpj(valor.cnpj)
      .informarInscricao(valor.inscricaoestadual)
      .informarPais(valor.pais)
      .informarEstado(valor.estado)
      .informarBairro(valor.bairro)
      .informarLogradouro(valor.logradouro)
      .informarNumero(valor.numero)
      .informarComplemento(valor.complemento)
      .informarCep(valor.cep)
      .pause(5000)
      .proximo()

  })
});


Given('acesso a pagina para realizar um cadastro e informo os dados da empresa Representada', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informar(valor.tipoempresa)
      .informarCodigoSap(valor.codigosap)
      .informarRazaoSocial(valor.razaosocial)
      .informarcnpj(valor.cnpj)
      .informarInscricao(valor.inscricaoestadual)
      .informarPais(valor.pais)
      .informarEstado(valor.estado)
      .informarBairro(valor.bairro)
      .informarLogradouro(valor.logradouro)
      .informarNumero(valor.numero)
      .informarComplemento(valor.complemento)
      .informarCep(valor.cep)
      .informarCaracteristicas(valor.caracteristicas)
      .pause(5000)
      .proximo()

  })
});

Given('acesso a pagina para realizar um cadastro e informo os dados da empresa filial geradora', function (dataTable) {    
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informar(valor.tipoempresa)
      .informarCodigoSap(valor.codigosap)
      .informarRazaoSocial(valor.razaosocial)
      .informarcnpj(valor.cnpj)
      .informarInscricao(valor.inscricaoestadual)
      .informarPais(valor.pais)
      .informarEstado(valor.estado)
      .informarBairro(valor.bairro)
      .informarLogradouro(valor.logradouro)
      .informarNumero(valor.numero)
      .informarComplemento(valor.complemento)
      .informarCep(valor.cep)
      .informarCaracteristicas(valor.caracteristicas)
      .informarCapacidade(valor.capacidade)
      .informarGarantiaFisica(valor.garantia)
      .informaratoRegulatorio(valor.ato)
      .informarperdaInterna(valor.perdainterna)
      .informarperdaTransmissao(valor.perdatransmissao)
      .pause(5000)
      .proximo()

  })
                                                                                                     
});                                                                                                                        


Given('informo os dados para geradora', function (dataTable) {
  let empresa = client.page.empresa()

  data = dataTable.hashes();

  data.map(valor => {
    return empresa
      .pause(3000)
      .informarCapacidade(valor.capacidade)
      .pause(5000)
      .proximo()

  })
});

Then('verifico a mensagem se a empresa foi cadastrada {string}', function (mensagem) {
  return empresa.confirmarcadastro(mensagem)
});

