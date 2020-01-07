Feature: Cadastra um Agente

    Objetivo dessa Feature e mostrr como realizar o cadastro de um agente no sistema SmartEnergy

    Scenario Outline: Cadastra um Agente
    Given que acesso a tela de para realizar um cadastro de agente
        And informo o codigo ccee "<ccee>"
        And informo o nome do agente ccee "<nome>"
        And informo o nome do agente vale "<vale>"
        And informo o a empresa associada "<empresa>"
        When solicito para salvar o agente
        Then verifico se o agente foi salvo com sucesso "Dados salvos com sucesso."

        Examples:
            | ccee | nome          | vale  | empresa      |
            | 357  | somemte 02222 | teste | Basbosa LTDA |

    
    Scenario: Editar um Agente cadastrado
        Given que acesso a tela para pesquisar um agente
        And pesquiso o agente cadastro "somemte 02222"
        And seleciono o agente cadastrado
        When solicito para editar o nome do agente vale "ok"
        And  solicito para salvar o agente
        Then verifico se o agente foi salvo com sucesso "Dados salvos com sucesso."

    
    Scenario: Inativar um Agente cadastrado
        Given que acesso a tela para pesquisar um agente
        And pesquiso o agente cadastro "somemte 02222"
        And solicito para inativar o agente
        And informo um justificativa "ok teste"
        Then verifico se o agente foi salvo com sucesso "Dados salvos com sucesso."

    
    Scenario: Realizar pesquisar por status do agente 
        Given que acesso a tela para pesquisar um agente
        And pesquiso pelo status "Ativo"
        Then todos os agentes ativos sao selecionados


        

