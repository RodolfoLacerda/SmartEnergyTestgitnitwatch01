var acesso = {
    with: function () {
        return this
            .navigate()
            .waitForElementVisible('@menu', 10000)
            .waitForElementVisible('@acessarMenu', 2000)
            .click('@acessarMenu')
            .waitForElementVisible('@cadastroGlobais', 5000)
            .click('@cadastroGlobais')
            .pause(2000)
            .waitForElementVisible('@adicionarEmpresa', 1000)
            .click('@adicionarEmpresa')
            .waitForElementVisible('@informarempresaAdicionar', 1000)
            .click('@informarempresaAdicionar')
    },

    informar: function (tipo) {
        const browser = this

        switch (tipo) {
            case 'Externa':
                browser
                    .waitForElementVisible('@selecionarEmpresa', 2000)
                    .click('@selecionarEmpresa')

                    .waitForElementVisible('@informarEmpresaExterna', 2000)
                    .click('@informarEmpresaExterna')
                    .api.keys(browser.api.Keys.TAB)

                break;
            case 'Interna':
                browser
                    .waitForElementVisible('@selecionarEmpresa', 2000)
                    .click('@selecionarEmpresa')

                    .waitForElementVisible('@informarEmpresaInterna', 2000)
                    .click('@informarEmpresaInterna')
                    .api.keys(browser.api.Keys.TAB)
                break;
            case 'Filial':
                browser
                    .click('@selecionarEmpresa', 2000)
                    .waitForElementVisible('@selecionarEmpresa', 2000)
                    .click('@selecionarEmpresa')

                    .waitForElementVisible('@informarEmpresaFilial', 2000)
                    .click('@informarEmpresaFilial')
                    .api.keys(browser.api.Keys.TAB)
                break;

            case 'Representada':
                browser
                    .waitForElementVisible('@selecionarEmpresa', 2000)
                    .click('@selecionarEmpresa')

                    .waitForElementVisible('@informarEmpresaRepresentada', 2000)
                    .click('@informarEmpresaRepresentada')
                    .api.keys(browser.api.Keys.TAB)
                break;

        }

        return this.pause(1000)
    },


    informarEmpresaInterna: function () {
        const browser = this

        browser
            .waitForElementVisible('@selecionartipo', 10000)
            .click('@selecionartipo')


            .waitForElementVisible('@informarEmpresaInterna', 10000)
            .click('@informarEmpresaInterna')
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)
    },

    informarCodigoSap: function (sap) {
        return this
            .setValue('@codigoSap', Math.floor(Math.random() * 11111111) - 99999999, sap)


    },

    informarRazaoSocial: function (social) {
        return this
            .setValue('@razaoSocial', social)
    },

    informarcnpj: function (cnpj) {
        return this
            .setValue('@cnpj', cnpj)
    },

    informarInscricao: function (inscricao) {
        return this
            .setValue('@inscricao', inscricao)

    },

    informarPais: function () {
        const browser = this

        browser
            .waitForElementVisible('@selecionarPais', 10000)
            .click('@selecionarPais')

            .waitForElementVisible('@informarPaisBrasil', 1000)
            .click('@informarPaisBrasil')
            .pause(3000)
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)

    },

    informarEstado: function () {
        const browser = this

        browser
            .waitForElementVisible('@informarEstadoPernambuco', 1000)
            .click('@informarEstadoPernambuco')
            .pause(3000)
            .api.keys(browser.api.Keys.TAB)


        return this.pause(1000)
    },

    informarCidade: function () {
        const browser = this

        browser
            .waitForElementVisible('@informarCidadeRecife', 3000)
            .click('@informarCidadeRecife')
            .pause(3000)
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)

    },

    informarBairro: function (bairro) {
        return this
            .setValue('@bairro', bairro)
    },

    informarLogradouro: function (logradouro) {
        return this
            .setValue('@logradouro', logradouro)
    },

    informarNumero: function (numero) {
        return this
            .setValue('@numero', numero)
    },

    informarComplemento: function (complemento) {
        return this
            .setValue('@complemento', complemento)
    },

    informarCep: function (cep) {
        return this
            .setValue('@cep', cep)
    },

    proximo: function () {
        return this
            .waitForElementVisible('@proximo', 2000)
            .click('@proximo')
    },

    informarnomeContato: function (nomeContato) {
        return this
            .setValue('@nomeContato', nomeContato)
    },

    informaremailContato: function (email) {
        return this
            .setValue('@emailContato', email)
    },

    informartelefoneFixo: function (telefoneFixo) {
        return this
            .setValue('@telefoneFixo', telefoneFixo)
    },

    informartelefoneCelular: function (telefoneCelular) {
        const browser = this
        browser
            .waitForElementVisible('@telefoneCelular', 3000)
            .setValue('@telefoneCelular', telefoneCelular)
        return this.pause(1000)

    },

    informartipo: function (tipo) {
        return this
            .waitForElementVisible('@tipo', 3000)
            .click('@tipo')
            .waitForElementVisible('@selecionartipoFinanceiro', 2000)
            .click('@selecionartipoFinanceiro')
    },

    informaBanco: function (banco) {
        return this
            .setValue('@banco', banco)
    },

    informarAgencia: function (agencia) {
        return this
            .setValue('@agencia', agencia)
    },

    informarConta: function (conta) {
        return this
            .setValue('@conta', conta)
    },

    informarTipoconta: function (tipoconta) {
        return this
            .setValue('@tipoconta', tipoconta)
    },

    informardadosAdicionais: function (dadosAdicionais) {
        return this
            .setValue('@dadosAdicionais', dadosAdicionais)
    },

    salvarempresa: function () {
        return this
            .waitForElementVisible('@salvar', 10000)
            .click('@salvar')
    },

    informarCaracteristicas: function (caracteristica) {

        const browser = this

        switch (caracteristica) {
            case 'Consumidora':
                browser
                    .waitForElementVisible('@selecionarCaracteris', 2000)
                    .click('@selecionarCaracteris')

                    .waitForElementVisible('@informarConsumidora', 2000)
                    .click('@informarConsumidora')
                    .api.keys(browser.api.Keys.TAB)

                break;
            case 'Geradora':
                browser
                    .waitForElementVisible('@selecionarCaracteris', 2000)
                    .click('@selecionarCaracteris')

                    .waitForElementVisible('@informarGeradora', 2000)
                    .click('@informarGeradora')
                    .api.keys(browser.api.Keys.TAB)
                break;


        }
        return this.pause(1000)
    },

    informarCapacidade: function (capacidade) {
        return this
            .waitForElementVisible('@capacidadeInstalada', 2000)
            .setValue('@capacidadeInstalada', capacidade)
    },

    informarGarantiaFisica: function (garantiaFisica){
        return this
        .waitForElementVisible('@garantiaFisica', 2000)
        .setValue('@garantiaFisica', garantiaFisica)
    },

    informaratoRegulatorio: function(atoRegulatorio){
        return this
        .waitForElementVisible('@atoRegulatorio', atoRegulatorio)
        .setValue('@atoRegulatorio', atoRegulatorio)
    },

    informarperdaInterna: function(perdaInterna){
        return this
        .waitForElementVisible('@perdaInterna', perdaInterna)
        .setValue('@perdaInterna', perdaInterna)
    },

    informarperdaTransmissao: function (perdaTransmissao){
        return this
        .waitForElementVisible('@perdaTransmissao', perdaTransmissao)
        .setValue('@perdaTransmissao', perdaTransmissao)
    },

    confirmarcadastro: function () {

        const browser = this

        browser
            .waitForElementVisible('@@mensagem', 10000)
            .assert.containsText('@mensagem', 'Dados salvos com sucesso.')

        return this.pause(1000)
    }




}

module.exports = {
    url: '/',
    commands: [acesso],
    elements: {
        menu: '.MuiIconButton-edgeStart',
        acessarMenu: '.MuiIconButton-colorSecondary',
        cadastroGlobais: '.MuiList-root > .MuiButtonBase-root:nth-child(1) .MuiTypography-root',
        adicionarEmpresa: '.MuiList-root:nth-child(2) > .MuiTypography-root:nth-child(1) .MuiListItemText-root',
        informarempresaAdicionar: '.MuiButton-contained > .MuiButton-label',
        selecionarEmpresa: '#address_company\\.type',
        informarEmpresaInterna: '#menu-address_company\\.type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(3)',
        informarEmpresaExterna: '#menu-address_company\\.type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)',
        informarEmpresaFilial: '#menu-address_company\\.type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        informarEmpresaRepresentada: '#menu-address_company\\.type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(4)',
        codigoSap: 'input[name="address_company.id_sap"]',
        razaoSocial: 'input[name="address_company.company_name"]',
        cnpj: 'input[name="address_company.state_number"]',
        inscricao: 'input[name="address_company.registered_number"]',
        selecionarPais: '#address_company\\.nationality',
        informarPaisBrasil: '#address_company\\.nationality-option-0',
        selecionarEstado: '#id_state',
        informarEstadoPernambuco: '#id_state-option-16',
        selecionarCidade: '#id_city',
        informarCidadeRecife: '#id_city-option-3',
        bairro: 'input[name="neighborhood"]',
        logradouro: 'input[name="street"]',
        numero: 'input[name="number"]',
        complemento: 'input[name="complement"]',
        cep: 'input[name="zip_code"]',
        selecionarCaracteris: '#address_company\\.characteristics',
        informarConsumidora: '#menu-address_company\\.characteristics > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        informarGeradora: '#menu-address_company\\.characteristics > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)',
        capacidadeInstalada: '#address_company\\.eletric_utility\\.instaled_capacity',
        garantiaFisica: '#address_company\\.eletric_utility\\.guaranteed_power',
        atoRegulatorio: '#address_company\\.eletric_utility\\.regulatory_act',
        perdaInterna: '#address_company\\.eletric_utility\\.internal_loss',
        perdaTransmissao: '#address_company\\.eletric_utility\\.transmission_loss',
        proximo: '.MuiButton-containedPrimary > .MuiButton-label',
        nomeContato: '#address_company\\.company_contacts\\[0\\]\\.responsible',
        emailContato: '#address_company\\.company_contacts\\[0\\]\\.email',
        telefoneFixo: '#address_company\\.company_contacts\\[0\\]\\.phone',
        telefoneCelular: '#address_company\\.company_contacts\\[0\\]\\.cellphone',
        selecionartipoFinanceiro: '#menu-address_company\\.company_contacts\\[0\\]\\.type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        tipo: '#address_company\\.company_contacts\\[0\\]\\.type',
        banco: '#address_company\\.bank_account\\[0\\]\\.bank',
        agencia: '#address_company\\.bank_account\\[0\\]\\.bank_agency',
        conta: '#address_company\\.bank_account\\[0\\]\\.account_number',
        tipoconta: '#address_company\\.bank_account\\[0\\]\\.account_type',
        dadosAdicionais: '#address_company\\.bank_account\\[0\\]\\.other',
        salvar: '.MuiButton-containedPrimary > .MuiButton-label',
        mensagem: '#client-snackbar',
        mensagemexistente: '#client-snackbar'

    }
}




