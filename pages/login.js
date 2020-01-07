var acesso = {
    with: function () {
        return this
            .navigate()
            .waitForElementVisible('@menu', 10000)
            .waitForElementVisible('@acessarMenu', 2000)
            .click('@acessarMenu')
            .waitForElementVisible('@menuContratos', 5000)
            .click('@menuContratos')
            .waitForElementVisible('@contratoUsomenu',3000)
            .click('@contratoUsomenu')
            .pause(2000)
           
            .waitForElementVisible('@contratoUso', 4000)
            .click('@contratoUso')


    },


    informarContratoEmpresa: function (tipo) {
        const browser = this

        switch (tipo) {
            case 'Transmissao':
                browser
                    .waitForElementVisible('@selecionarTipoContrato', 10000)
                    .click('@selecionarTipoContrato')

                    .waitForElementVisible('@informarTipoContratoTrans', 10000)
                    .click('@informarTipoContratoTrans')
                    .api.keys(browser.api.Keys.TAB)
                break;
            case 'Distribuição':
                browser
                    .waitForElementVisible('@selecionarTipoContrato', 10000)
                    .click('@selecionarTipoContrato')


                    .waitForElementVisible('@informarTipoContratoDis', 10000)
                    .click('@informarTipoContratoDis')
                    .api.keys(browser.api.Keys.TAB)

        }

        return this.pause(1000)
    },

    informarTipoContratoDis: function () {
        const browser = this

        browser

            .waitForElementVisible('@selecionarTipoContrato', 10000)
            .click('@selecionarTipoContrato')


            .waitForElementVisible('@informarTipoContratoDis', 10000)
            .click('@informarTipoContratoDis')
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)
    },

    informarTipoContratoTrans: function () {
        const browser = this

        browser
            .waitForElementVisible('@contratoUso', 4000)
            .waitForElementVisible('@selecionarTipoContrato', 10000)
            .click('@selecionarTipoContrato')



            .waitForElementVisible('@informarTipoContratoTrans', 10000)
            .click('@informarTipoContratoTrans')
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)
    },


    informarEmpresa: function () {
        const browser = this

        browser
            .pause(4000)
            .waitForElementVisible('@selecionarEmpresa', 10000)
           
            .waitForElementVisible('@informarEmpresaCaja', 10000)
            .click('@informarEmpresaCaja')
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)

    },

    informarAgente: function () {
        const browser = this

        browser
            .waitForElementVisible('@selecionarAgente', 10000)
            

            .waitForElementVisible('@informarAgente', 10000)
            .click('@informarAgente')

        return this.pause(1000)
    },

    informarPontoCo: function (ponto) {
        return this
            .setValue('@pontoConexao', ponto)

    },


    informarInicioPosto: function (inicioPosto) {
        return this
            .setValue('@inicioPosto', inicioPosto)
    },

    informarFimPosto: function (fimPosto) {
        return this
            .setValue('@fimPosto', fimPosto)
    },

    informarNumeroContrato: function (numeroContrato) {
        return this
            .setValue('@numeroContrato', numeroContrato)
    },

    informarTensaoNominal: function () {
        const browser = this

        browser
            .waitForElementVisible('@selecionarTensaoNominal', 10000)
            .click('@selecionarTensaoNominal')

            .waitForElementVisible('@informarTensaoNominal', 10000)
            .click('@informarTensaoNominal')
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)
    },

    informarfatorReferencia: function (referencia) {
        return this
            .setValue('@fatorReferencia', referencia)
    },

    informartoleranciaUltrapassagem: function (ultrapassagem) {
        return this
            .setValue('@toleranciaUltrapassagem', ultrapassagem)

    },

    informarinicioContrato: function (inicioContrato) {
        return this
            .setValue('@inicioContrato', inicioContrato)
    },

    informarfimContrato: function (fimContrato) {
        return this
            .setValue('@fimContrato', fimContrato)

    },

    informardataInicio: function (informarDataInicio) {
        return this
            .setValue('@dataInicio', informarDataInicio)
    },

    informardataFim: function (dataFim) {
        return this
            .setValue('@dataFim', dataFim)
    },

    informarhoraInicio: function (horaInicio) {
        return this
            .setValue('@horaInicio', horaInicio)
    },

    informarhoraFim: function (horaFim) {
        return this
            .setValue('@horaFim', horaFim)
            .pause(5000)
            .click('@proximo')

    },

    proximo: function () {

        const browser = this

        browser
            
            .click('@proximo')

        return this.pause(1000)
    },

    informarpn: function (pn) {
        return this
            .setValue('@pn', pn)
    },

    informarinstalacao: function (instalacao) {
        return this
            .setValue('@instalacao', instalacao)
    },

    informarperiodo: function (periodo) {
        return this
            .setValue('@periodo', periodo)
    },

    informaranneel: function (aneel) {
        return this
            .setValue('@anneel', aneel)

    },

    informardatapublicacao: function (publica) {
        const browser = this

        browser
            .setValue('@datapublicacao', publica)
            .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)

    },

    informarModalidade: function () {
        const browser = this

        browser
            .waitForElementVisible('@selecionarModalidade', 3000)
            .click('@selecionarModalidade')

            .waitForElementVisible('@informarmodalidadeVerde', 2000)
            .click('@informarmodalidadeVerde')

        return this.pause(1000)
    },

    informardataInicioModalidade: function (datamodalidade) {
        return this
            .setValue('@dataInicioModalidade', datamodalidade)
    },

    informardataFimModalidade: function (dataFimModalidade) {
        return this
            .setValue('@dataFimModalidade', dataFimModalidade)
    },

    informarmusdunico: function (musdunico) {
        return this
            .setValue('@musdunico', musdunico)
    },

    informartarifaunica: function (tarifaunica) {
        return this
            .setValue('@tarifaunica', tarifaunica)
    },

    salvarcontrato: function () {
        const browser = this

        browser
            .waitForElementVisible('@salvar', 10000)
            .click('@salvar')

        return this.pause(1000)
    },

    confirmarcadastro: function () {
        const browser = this

        browser
            .waitForElementVisible('@mensagem', 10000)
            .assert.containsText('@mensagem', 'Dados salvos com sucesso.')
            

        return this.pause(1000)

    },

    uploadArquivos: function () {

        return this
            .setValue('@arquivar', require('path').resolve('../SmartEnergyTest/images/resident-evil-2002.jpg'))
            .pause(1000)
            .click('@proximo')
           

    }
}



module.exports = {
    url: '/',
    commands: [acesso],
    elements: {
        menu: '.MuiIconButton-edgeStart',
        acessarMenu: '.MuiIconButton-colorSecondary',
        menuContratos: '.MuiButtonBase-root:nth-child(5) .MuiTypography-root',
        contratoUsomenu: '.MuiList-root:nth-child(6) > .MuiTypography-root:nth-child(2) .MuiListItemText-root',
        adicionarContrato: '.MuiTypography-root:nth-child(2) .MuiListItemText-root',
        contratoUso: '.MuiButton-contained > .MuiButton-label',
        selecionarTipoContrato: '#id_usagecontract',
        informarTipoContratoDis: '#menu-use_contract_type\\.id_use_contract_type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)',
        informarTipoContratoTrans: '#menu-use_contract_type\\.id_use_contract_type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        selecionarEmpresa: '#id_company',
        informarEmpresaCaja: '#id_company-option-0',
        informarEmpresaItabira: '#menu-company\\.id_company > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        selecionarAgente: '#id_energydealer',
        informarAgente: '#id_energydealer-option-0',
        pontoConexao: '#id_connectionpoint',
        inicioPosto: '#id_peakbegintime',
        fimPosto: '#id_endbegintime',
        numeroContrato: '#id_usagecontractnumber',
        selecionarTensaoNominal: '#id_ratedvoltage',
        informarTensaoNominal: '.MuiButtonBase-root:nth-child(6)',
        fatorReferencia: '#id_powerfactor',
        toleranciaUltrapassagem: '#id_tolerancerange',
        inicioContrato: '#id_startdate',
        fimContrato: '#id_enddate',
        dataInicio: '#id_ratepostexceptions_begindate_0',
        dataFim: '#id_ratepostexceptions_enddate_0',
        horaInicio: '#id_ratepostexceptions_beginhouclock_0',
        horaFim: '#id_ratepostexceptions_endhourclock_0',
        proximo: '#id_btn_next_session',
        pn: '#id_energydistributor',
        instalacao: '#id_energydistributor_installation',
        periodo: '#id_energydistributor_renovationperiod',
        anneel: '#id_energydistributor_aneelresolution',
        datapublicacao: '#id_energydistributor_aneelpublication',
        selecionarModalidade: '#id_energydistributor_hourlytaxmodality',
        informarmodalidadeVerde: '.MuiPaper-root:nth-child(3) > .MuiList-root > .MuiButtonBase-root:nth-child(2)',
        dataInicioModalidade: '#id_tariffmodes_begindate_0',
        dataFimModalidade: '#id_tariffmodes_enddate_0',
        musdunico: '#id_tariffmodes_uniquemust_0',
        tarifaunica: '#id_tariffmodes_uniquetax_0',
        salvar: '#id_btn_salvar',
        mensagem: '#client-snackbar',
        arquivar: '#id_upload_file_file_0'
    }
}

