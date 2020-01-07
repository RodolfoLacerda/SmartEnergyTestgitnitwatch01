const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

const agente = client.page.agente()

Given('que acesso a tela de para realizar um cadastro de agente', function () {
    return agente.with()
});

Given('informo o codigo ccee {string}', function (codigocce) {
    return agente.informarcodigoccee(codigocce)
});

Given('informo o nome do agente ccee {string}', function (nomeagenteccee) {
    return agente.informarnomeagenteccee(nomeagenteccee)
  });

  Given('informo o nome do agente vale {string}', function (nomeagentevale) {
    return agente.informarnomeagentevale(nomeagentevale)
  });


 Given('informo o a empresa associada {string}', function (empresa) {    
   return agente.informarempresa()                                              
 });                                                                    


 When('solicito para salvar o agente', function () {
    return agente.salvar()
  });

  Then('verifico se o agente foi salvo com sucesso {string}', function (string) {
    return agente.confirmarcadastro()
  });

  Given('que acesso a tela para pesquisar um agente', function () {
    return agente.pesquisaragente()
  });

  Given('pesquiso o agente cadastro {string}', function (pesquisaragente) {
    return agente.informarpesquisar(pesquisaragente)
  });

  Given('seleciono o agente cadastrado', function () {
    return agente.editaragente()
  });

  When('solicito para editar o nome do agente vale {string}', function (nomeagentevale) {
    return agente.editarnomeagente(nomeagentevale)
  });

  Given('solicito para inativar o agente', function () {                 
    return agente.inativar()                                                   
  });  
  
  Given('informo um justificativa {string}', function (justificativa) {
    return agente.informarjustificativa(justificativa)
  });

  Given('pesquiso pelo status {string}', function (string) {
    return agente.pesquisarstatus()
  });

  Then('todos os agentes ativos sao selecionados', function () {
    return agente.listaragentes()
  });