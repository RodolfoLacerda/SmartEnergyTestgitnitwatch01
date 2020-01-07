Feature: Contrato de item de Energia


    Background: Acessar contrato de energia 
        Given que acesso a tela de contrato de energia 

     Scenario: Cadastrar uma empresa modalidade longo prazo 
        And informo todos os dados basicos para cadastro 
        | modalidade | sap | tipo | agentevendedor | agentecomprador | iniciosupremento | fimsupremento | volumemwm | volumemwh | produto | nomecontrato | statuscontrato |

        And informo os dados financeiros 
        | precobase | database | valorbase | dataaniversario | indicereajuste | precovigente | retusd | 

        And informo a flexibilizacao
        | tipoflex | minima | maxima |

        And informo a sazonalizacao
        | tiposazo | sazonaminima | sazonamaxima |

        And informo a garantia
        | meses | horas | valor garantido | dataemissao | datavirgencia |   