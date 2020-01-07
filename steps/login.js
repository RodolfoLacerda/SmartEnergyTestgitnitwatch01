const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

const login = client.page.login();

Given('que acesso a tela de contrato de uso', function () {

  return login.with()
});


Given('informo o tipo de contrato {string}', function (contrato) {


  switch (contrato) {
    case 'Distribuição':
      login.informarTipoContratoDis()
      break;
    case 'Transmissão':
      login.informarTipoContratoTrans()
      break;


  }

});

Given('informo uma empresa {string}', function (empresa) {


  return login.informarEmpresa(empresa)

});

Given('informo um agente {string}', function (agente) {


  return login.informarAgente(agente)

});

Given('informo o ponto de conexao {string}', function (ponto) {


  return login.informarPontoCo(ponto)

});

Given('informo o inicio do posto tarifario ponta {string}', function (inicioPosto) {

  return login.informarInicioPosto(inicioPosto);
});

Given('infomo o fim do posto tarifario ponta {string}', function (fimPosto) {

  return login.informarFimPosto(fimPosto);
});

Given('numero contrato de uso {string}', function (numeroContrato) {


  return login.informarNumeroContrato(numeroContrato);
});

Given('informo a tensao nominal {string}', function (tensaoNominal) {


  return login.informarTensaoNominal(tensaoNominal);
});

Given('informo o fator de potencia de referencia {string}', function (tensao) {

  return login.informarfatorReferencia(tensao);
});

Given('informo a tolerancia de ultrapassagem {string}', function (ultrapassagem) {


  return login.informartoleranciaUltrapassagem(ultrapassagem);
});

Given('informo o inicio do contrato {string}', function (inicioContrato) {


  return login.informarinicioContrato(inicioContrato);
});

Given('informo o fim do contrato {string}', function (fimContrato) {


  return login.informarfimContrato(fimContrato);
});

Given('informo a data inicio {string}', function (dataInicio) {


  return login.informardataInicio(dataInicio);
});

Given('informo a data fim {string}', function (dataFim) {


  return login.informardataFim(dataFim);
});

Given('informo o horario de inicio {string}', function (horarioInicio) {


  return login.informarhoraInicio(horarioInicio);
});

Given('informo o horario fim {string}', function (horafim) {


  return login.informarhoraFim(horafim)

});




When('informo o pn {string}', function (pn) {


  return login.informarpn(pn)

});

When('and informo a instalacao {string}', function (instalacao) {


  return login.informarinstalacao(instalacao)

});

When('informo o periodo de renovacao {string}', function (renovacao) {


  return login.informarperiodo(renovacao)

});

When('informo a resolucao Aneel {string}', function (aneel) {


  return login.informaranneel(aneel)

});

When('informo data de publicacao {string}', function (publica) {


  return login.informardatapublicacao(publica)

});


When('informo modalidade tarifaria horaria {string}', function (horario) {


  return login.informarModalidade(horario)
});

When('informo a data inicio da modalidade tarifaria {string}', function (datamodalidade) {


  return login.informardataInicioModalidade(datamodalidade)


});


When('informo a data fim da modalidade tarifaria {string}', function (dataFimModalidade) {


  return login.informardataFimModalidade(dataFimModalidade)

});

When('informo a musd unico  {string}', function (musdunico) {


  return login.informarmusdunico(musdunico)

});

When('informo tarifa unica {string}', function (tarifaunica) {


  return login.informartarifaunica(tarifaunica)

});

Then('solicito para salvar o contrato de uso', function () {


  return login.salvarcontrato()

});


Then('o sistema salvar o contrato com sucesso {string}', function (mensagem) {


  return login.confirmarcadastro(mensagem)
});

  When('adiciono o arquivo', function () {

    return login.uploadArquivos()
  });

  Given('informo todos os dados', function (dataTable) {
    data = dataTable.hashes();
    
    data.map(valor => {
      return login
      .informarContratoEmpresa(valor.contrato)
      .informarEmpresa(valor.empresa)
      .informarAgente(valor.agente)
      .informarPontoCo(valor.conexao)
      .informarInicioPosto(valor.iniciotarifario)
      .informarFimPosto(valor.fimtarifario)
      .informarNumeroContrato(valor.numero)
      .informarTensaoNominal(valor.tensao)
      .informarfatorReferencia(valor.referencia)
      .informartoleranciaUltrapassagem(valor.ultrapassagem)
      .informarinicioContrato(valor.iniciocontrato)
      .informarfimContrato(valor.fimcontrato)
      .informardataInicio(valor.datainicio)
      .informardataFim(valor.datafim)
      .informarhoraInicio(valor.iniciohora)
      .informarhoraFim(valor.fimhora)
      .proximo()
      
    })
  });

  When('solicito proximo', function () {
    return login
    .waitForElementVisible('@proximo')
    
  });

  When('informo os dados para cadastro', function (dataTable) {
    data = dataTable.hashes();
    
    data.map(valor => {
      return login
      .informarpn(valor.pn)
      .informarinstalacao(valor.instalacao)
      .informarperiodo(valor.renovacao)
      .informaranneel(valor.resolucao)
      .informardatapublicacao(valor.publicacao)
      .informarModalidade(valor.tarifariahoraria)
      .informardataInicioModalidade(valor.tarifamodalidadeinicio)
      .informardataFimModalidade(valor.tarifamodalidadefim)
      .informarmusdunico(valor.musd)
      .informartarifaunica(valor.tarifaunica)
      .proximo()

    
      
    })
  });