Feature: Ponto de Medicao

   Reclassificação do SmartEnergy para um sistema crítico de alto impacto
   várias funcionalidades precisarão ser redesenhadas ou criadas e o cadastro de pontos de medição será uma delas

Scenario Outline: Cadastro de ponto de medicao tipo Fronteira
   Given que acesso a tela para realizar um cadastro de ponto de medicao
   And infomo o tipo de medicao "<medicao>"
   And informo a tag do medidor "<medidor>"
   And informo o nome da empresa associada "<associada>"
   And informo a concessionaria conectada "<conectada>"
   And informo o codigo do CEE "<cee>"
   And informo o medidores "<medidores>"
   When solicito para salvar o ponto de medicao
   Then verifico se o ponto de medido foi salvo "Dados salvos com sucesso."

Examples:
| medicao   | medidor             | associada                  | conectada | cee | medidores               |
| Fronteira | BR_ARAXA.FRONTEIRA  | ALIANÇA GERAÇÃO - Aimores  |           | 123 | BR_AGUA_LIMPA.FRONTEIRA |


Scenario: Cadastra ponto de medicao 
   Given que acesso a tela para realizar um cadastro de ponto de medicao
   And informo todos os dados para cadastrar um medidor
   | medicao   | medidor             | associada | medidores |
   | Principal | BR_ARAXA.FRONTEIRA  | ddfdf     |           |
   | Setorial  | BR_ARAXA.FRONTEIRA  | ddfdf     |           |
   | Carga     | BR_ARAXA.FRONTEIRA  | ddfdf     |           |
   When solicito para salvar o ponto de medicao
   Then verifico se o ponto de medido foi salvo "Dados salvos com sucesso."


Scenario: Pesquisar um medidor cadastrado 
   Given que acesso a tela para realizar uma pesquisar de um medidor 
   And realizo a pesquisar de um medidor "BR_ARAXA.FRONTEIRA"
   And edito o medidor para "BR_JANGADA.FRONTEIRA"
   When solicito para salvar o ponto de medicao
   Then verifico se o ponto de medido foi salvo "Dados salvos com sucesso."


Scenario: Exportar para o excel todos os medidores cadastrados
   Given que acesso a tela para realizar uma pesquisar de um medidor 
   When solicito para exportar todos os medidores para o excel

Scenario: Realizar pesquisar pelo status do medidor 
   Given que acesso a tela para realizar uma pesquisar de um medidor 
   And solicito a pesquisar por "Ativo"
   Then todos os medidor sao selecionados



  


