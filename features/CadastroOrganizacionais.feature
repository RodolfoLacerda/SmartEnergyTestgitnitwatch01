Feature: Cadastro Organizacionais

    
    Scenario: Cadastro Organizacionais modelo
        Given que acesso a tela de cadastro organizacao
        When  informo os dados para cadastro:
            | tipo      | descricao      |
            | Diretoria | teqsereqtee01eg050 |
            | Diretoria | terqeeqwsteg020e5e |
            | Diretoria | teaseqewter0g309ee |
        And clico no botão Salvar
        Then verifico a mensagem "Dados salvos com sucesso."

    
    Scenario: Pesquisar uma Organização
        Given que acesso a tela de cadastro organizacao de pesquisar
        And solicito a pesquisar por descricao "teqsreqtee01eg050"
        When informo a edicao no campo descricao "eeeeexxccvv"
        Then clico no botão Salvar
        Then verifico a mensagem "Dados salvos com sucesso."


    Scenario: exporta arquivo para Execel
        Given que acesso a tela de cadastro organizacao de pesquisar
        When clico no botao exportar para baixar o arquivo para Excel
        Then verifico se o arquivo foi baixado com sucesso

    
    Scenario: Desativar uma organizacao
        Given que acesso a tela de cadastro organizacao de pesquisar
        And solicito a pesquisar por descricao para desativar "teqsereqtee01eg050"
        Then solicito para desativar uma organizacao
        And informo uma juntificativa "somente teste02"
        Then verifico se a organizacao foi desativada


