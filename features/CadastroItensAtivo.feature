Feature: Cadastra um item do Ativo 

    Background: Acessar a tela do item do Ativo 
        Given que acesso a tela de cadastro do item de ativo 


        Scenario: Cadastrar um item do ativo
            And informo todos os dados 
            | empresa | composicao | centro | ativo |
            And informo os dados sanolizacao da geracao 
            | anosanolizacao | janeiro | fevereiro | marco | abril | maio | junho | julho | agosto | setembro | outubro | novembro | dezembro |

            And informo os dados custo geracao 
            | anogeracao | janeiro | fevereiro | marco | abril | maio | junho | julho | agosto | setembro | outubro | novembro | dezembro |

            And informo os dados custo depreciacao 
            | anodepreciacao | janeiro | fevereiro | marco | abril | maio | junho | julho | agosto | setembro | outubro | novembro | dezembro |

            When solicito para salvar o ativo 
            Then verifico se o item do ativo foi salvo "Dados salvos com sucesso."


    
