
Feature: Contrato de uso do sistema Smart Energy

   Realizar cadastro de um contrato de uso no sistema SmatEnergy
   conforme a sua regra de negocio

   Scenario: Cadastrar um contrato de uso do tipo Transmissão
      Given que acesso a tela de contrato de uso
      And informo todos os dados
         | contrato     | empresa | agente | conexao | iniciotarifario | fimtarifario | numero | tensao | referencia | ultrapassagem | iniciocontrato | fimcontrato | datainicio | datafim    | iniciohora | fimhora |
         | Distribuição | Cajati  | Cajati | 1235641 | 20:05           | 22:00        | 12351  | 34.50  | 15         | 88            | 20/02/2020     | 20/06/2020  | 20/02/2020 | 05/08/2021 | 15:30      | 20:45   |
      When solicito proximo
      And informo os dados para cadastro
         | pn | instalacao | renovacao | resolucao | publicacao | tarifariahoraria | tarifamodalidadeinicio | tarifamodalidadefim | musd | tarifaunica |
         | 12 | 2300       | 3         | 12445     | 20/05/2020 | Verde            | 20/05/2020             | 20/06/2020          | 2    | 2           |
      When solicito proximo
      And adiciono o arquivo
      When solicito para salvar o contrato de uso
      Then o sistema salvar o contrato com sucesso "Dados salvos com sucesso."


   Scenario: Cadastrar um contrato de uso do tipo Transmissão
      Given que acesso a tela de contrato de uso
      And informo todos os dados
         | contrato     | empresa | agente | conexao | iniciotarifario | fimtarifario | numero | tensao | referencia | ultrapassagem | iniciocontrato | fimcontrato | datainicio | datafim    | iniciohora | fimhora |
         | Transmissão  | Cajati  | Cajati | 1235641 | 20:05           | 22:00        | 12351  | 34.50  | 15         | 88            | 20/02/2020     | 20/06/2020  | 20/02/2020 | 05/08/2021 | 15:30      | 20:45   |
      When solicito proximo
      And informo os dados para cadastro
         | pn | instalacao | renovacao | resolucao | publicacao | tarifariahoraria | tarifamodalidadeinicio | tarifamodalidadefim | musd | tarifaunica |
         | 12 | 2300       | 3         | 12445     | 20/05/2020 | Verde            | 20/05/2020             | 20/06/2020          | 2    | 2           |
      When solicito proximo
      And adiciono o arquivo
      When solicito para salvar o contrato de uso
      Then o sistema salvar o contrato com sucesso "Dados salvos com sucesso."

