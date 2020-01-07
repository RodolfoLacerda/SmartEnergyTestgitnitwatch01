Feature: Cadastro de Perfil
    Como um usuario do SmartEnergy
    Eu tenho que preencher as informações da Perfil
    Para cadastrar um perfil no SmartEnergy


    Scenario: Cadastra um perfil
        Given acesso a pagina para realizar um cadastro de um perfil
        And informo os dados
            | associado | codigocee | nomecee | nomevale |
            | ddd       | 887412    | teste   | ssss     |
        When solicito para salvar o perfil
        Then verifico se o perfil foi salvo "Dados salvos com sucesso."

  
    Scenario: Editar um perfil cadastrado
        Given acesso a pagina para realizar pesquisar de perfil
        And solicito para pesquisar pelo codigocee "11132718285236874518"
        And edito o nome do perfil vale "OK TESTE"
         When solicito para salvar o perfil
        Then verifico se o perfil foi salvo "Dados salvos com sucesso."

    Scenario: Inativar um perfil cadastrado
        Given acesso a pagina para realizar pesquisar de perfil
        And solicito para pesquisar pelo codigocee "11132718285236874518"
        And solicito para Inativar
        And informo uma justificativa "testando"
        Then verifico se o perfil foi salvo "Dados salvos com sucesso."

   @pesquisar
   Scenario: Realizar pesquisar por status do perfil 
        Given acesso a pagina para realizar pesquisar de perfil
        And pesquiso pelo status alpha "Não"
        Then todos os perfis ativos sao selecionados


    Scenario: Exportar para o excel todos os perfil cadastrado
        Given acesso a pagina para realizar pesquisar de perfil
        When solicito para exportar todos os perfil para o excel

 




















