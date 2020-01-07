const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')


const organizacionais = client.page.organizacionais();

Given('que acesso a tela de cadastro organizacao', function () {
    return organizacionais.with()
  });

  When('informo os dados para cadastro:', function (dataTable) {
   
    data = dataTable.hashes();
    
    data.map(valor => {
      return organizacionais

      .informarTipo(valor.tipo)
      .informarDescricao(valor.descricao)
      .adicionarOrganiza()
     
    })

  });

  Then('clico no botão Salvar', function () {
    return organizacionais
    .pause(3000)
    .salvar()

  });

  Then('verifico a mensagem {string}', function (string) {
    return organizacionais
    .confirmarcadastro(string)
  });
  

  Given('que acesso a tela de cadastro organizacao de pesquisar', function () {
    return organizacionais.editarOrganizacao()
  });

  Given('solicito a pesquisar por descricao {string}', function (mensagem) {   
    return organizacionais.pesquisarDescricao(mensagem)                                                 
  });
  
  When('informo a edicao no campo descricao {string}', function (texto) {
    return organizacionais.editarDescricaoTexto(texto)
  });

  Then('clico no botao exportar para baixar o arquivo para Excel', function () {
    return organizacionais.clicarExposrtar()
  });


  When('verifico se o arquivo foi baixado com sucesso', function () {
    return organizacionais.verificarArquivo()
  });

  Given('solicito a pesquisar por descricao para desativar {string}', function (pesquisar) {
    return organizacionais.pesquisar(pesquisar) 
  });

  Then('solicito para desativar uma organizacao', function () {            
    return organizacionais.inativar(pesquisar)                                                
  });     
  
  
  Then('informo uma juntificativa {string}', function (justificativa) {
    return organizacionais.justificativa(justificativa)  
  });

                                                                             
  Then('verifico se a organizacao foi desativada', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



                                                         