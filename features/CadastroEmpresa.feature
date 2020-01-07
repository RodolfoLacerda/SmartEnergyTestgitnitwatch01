Feature: Cadastrar empresa
    Como um usuario do SmartEnergy
    Eu tenho que preencher as informações da empresa
    Para cadastrar a empresa no SmartEnergy

    O objetivo desta demanda é a reengenharia do cadastro de empresas, para que atenda todos os requisitos
    de segurança da informação e persistência dos dados, por se tratar de um sistema crítico de alto impacto.

    @externa
    Scenario: Cadastrar uma empresa Externa
        Given acesso a pagina para realizar um cadastro de empresa
        And acesso a pagina para realizar um cadastro e informo os dados
            | tipoempresa | codigosap | razaosocial | cnpj           | inscricaoestadual | pais   | estado     | cidade    | bairro | logradouro | numero | complemento | cep      |
            | Externa     | 145       | abc         | 41429640000107 | 324896381480      | Brasil | Pernambuco | Agrestina | Recife | Av. Para   | 345    | NA          | 53130290 |
        Then solicito para a tela de cadastro de contato
        And informo os dados para cadastro de contato
            | nome                   | email                           | telefonefixo   | telefonecelular | tipo |
            | Isabelly Hadassa Brito | iisabellyhadassabrito@gmail.com | (51) 2888-0760 | (51) 98280-7977 | Back |
        Then solicito para a tela de cadastro bancario
        And informo os dados para cadastro bancario
            | banco    | agencia | conta     | tipodeconta | dadosadicionais |
            | Bradesco | 2333    | 1328275-7 | corrente    | 255559595959    |
        Then solicito para a tela de revisao
        When solicito para salvar o cadastro da empresa
        Then verifico a mensagem se a empresa foi cadastrada "Dados salvos com sucesso."

    
    Scenario: Cadastrar uma empresa Filial caracteristicas Consumidora
        Given acesso a pagina para realizar um cadastro de empresa
        And acesso a pagina para realizar um cadastro e informo os dados da empresa filial
            | tipoempresa | codigosap | razaosocial              | cnpj           | inscricaoestadual | pais   | estado     | cidade    | bairro | logradouro | numero | complemento | cep      | caracteristicas |
            | Filial      | 145       | Pedro e Isabel Buffet ME | 41429640000107 | 324896381480      | Brasil | Pernambuco | Agrestina | Recife | Av. Para   | 345    | NA          | 53130290 | Consumidora     |
        Then solicito para a tela de cadastro de contato
        When solicito para salvar o cadastro da empresa
        Then verifico a mensagem se a empresa foi cadastrada "Dados salvos com sucesso."
    
    @filial
    Scenario: Cadastrar uma empresa Filial caracteristicas Geradora
        Given acesso a pagina para realizar um cadastro de empresa
        And acesso a pagina para realizar um cadastro e informo os dados da empresa filial geradora
            | tipoempresa | codigosap | razaosocial              | cnpj           | inscricaoestadual | pais   | estado     | cidade    | bairro | logradouro | numero | complemento | cep      | caracteristicas | capacidade | garantia | ato | perdainterna | perdatransmissao |
            | Filial      | 145       | Pedro e Isabel Buffet ME | 41429640000107 | 324896381480      | Brasil | Pernambuco | Agrestina | Recife | Av. Para   | 345    | NA          | 53130290 | Geradora        | 2,0000     | 5,0000   | 3   | 34,00        | 8,00             |
        Then solicito para a tela de cadastro de contato
        When solicito para salvar o cadastro da empresa
        Then verifico a mensagem se a empresa foi cadastrada "Dados salvos com sucesso."

    Scenario: Cadastrar uma empresa Interna
        Given acesso a pagina para realizar um cadastro de empresa
        And acesso a pagina para realizar um cadastro e informo os dados da empresa interna
            | tipoempresa | codigosap | razaosocial              | cnpj           | inscricaoestadual | pais   | estado     | cidade    | bairro | logradouro | numero | complemento | cep      | caracteristicas |
            | Interna     | 145       | Pedro e Isabel Buffet ME | 41429640000107 | 324896381480      | Brasil | Pernambuco | Agrestina | Recife | Av. Para   | 345    | NA          | 53130290 | Geradora        |
        Then solicito para a tela de cadastro de contato
        When solicito para salvar o cadastro da empresa
        Then verifico a mensagem se a empresa foi cadastrada "Dados salvos com sucesso."

