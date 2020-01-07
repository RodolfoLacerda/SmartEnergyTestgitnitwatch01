Feature: cadastrar um Ativo

    Background: Acessar a tela de cadastro de um ativo
        Given que acesso a tela de cadastro de um ativo

    @ativo
    Scenario: Cadastrar um ativo
        And informo todos os dados para realizar o cadastro
            | empresa | associado | codigo | submercado | balanco      |
            | ddfdf   | ssss      | 123654 | N          | itm do ativo |
        And informo o codigo proinfa
            | codigopro |
            | 123545    |
        And informo os dados para sazonalizacao
            | ano  | janeiro | fevereiro | marco | abril | maio | junho | julho | agosto | setembro | outubro | novembro | dezembro |
            | 2020 | 142     | 127       | 222   | 773   | 333  | 555   | 66325 | 25366  | 2548     | 5554551 | 569745   | 25544    |
        When solicito para salvar o cadastro do ativo
        Then verifico se o ativo foi salvo "Dados salvos com sucesso."

    Scenario: Editar um ativo cadastrado
        Given que acesso a tela de pesquisar do ativo
        And solicito uma pesquisar pelo campo de perfil associado "ssss"
        When solicito a troca do perfil para "yttyty"
        Then verifico se o ativo foi salvo "Dados salvos com sucesso."

    Scenario: Exportar todos os ativo para o excel
        Given que acesso a tela de pesquisar do ativo
        And solicito para exportar todos os ativos cadastro no sistema

    Scenario: Realizar pesquisar por status do ativo
        Given que acesso a tela de pesquisar do ativo
        And solicito a pesquisar por "Ativo"
        Then todos os ativos sao selecionados






