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
            .waitForElementVisible('@pontoMedicao', 1000)
            .click('@pontoMedicao')
            .pause(2000)
            .waitForElementVisible('@adicionarponto', 2000)
            .click('@adicionarponto')
    },

    informarmedicao: function(){
        const browser = this

        browser
        .pause(4000)
        .waitForElementVisible('@selecionarMedicao', 2000)
        .click('@selecionarMedicao')

        .waitForElementVisible('@informarFronteira', 3000)
        .click('@informarFronteira')
        
        
        return this.pause(1000)
    },

    informarmedidor: function (){
        const browser = this

        browser
        .waitForElementVisible('@selecionarMedidor', 2000)
        .click('@selecionarMedidor')
        .pause(3000)

        .waitForElementVisible ('@informarMedidorAraxa', 3000)
        .click('@informarMedidorAraxa')
    
        
        return this.pause(1000)

    },

    informarEmpresaAssociada: function (){
        const browser = this

        browser
        .waitForElementVisible('@selecionarEmpresa', 1000)
        .click ('@selecionarEmpresa')

        .waitForElementVisible('@informarEmpresaAlianca', 3000)
        .click('@informarEmpresaAlianca')
        .api.keys(browser.api.Keys.TAB)


        return this.pause(1000)
    },

    informarCodigoCee: function(cee){
        return this
        .setValue('@codigoCEE', cee)
    },

    informarmedido: function(){
        const browser = this

        browser
        .waitForElementVisible('@informarMedido', 1000)
        .click ('@informarMedido')

        .waitForElementVisible('@medidorAguaLimpa', 2000)
        .click('@medidorAguaLimpa')

        .waitForElementVisible('@medidotFronteira', 3000)
        .click('@medidotFronteira')

        .waitForElementVisible('@medidoAgua', 1000)
        .click('@medidoAgua')
        .api.keys(browser.api.Keys.TAB)

        return this.pause(1000)
    }


}



module.exports = {
    url: '/',
    commands: [acesso],
    elements: {
        menu: '.MuiIconButton-edgeStart',
        acessarMenu: '.MuiIconButton-colorSecondary',
        cadastroGlobais: '.MuiTypography-root:nth-child(1) .MuiTypography-root',
        pontoMedicao: '#root > div.jss309 > div.MuiPaper-root.jss312.MuiPaper-elevation0.jss313 > ul > a:nth-child(2) > div > div > span',
        adicionarponto: '.MuiButton-contained > .MuiButton-label',
        selecionarMedicao: '#select-gauge_type',
        informarFronteira: '#menu-gauge_type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)',
        selecionarMedidor: '#id_source',
        informarMedidorAraxa: '#id_source-option-2',
        selecionarEmpresa: '#select-id_company',
        informarEmpresaAlianca: '#menu-id_company > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        selecionarConcessionaria: '#select-gauge_dealership\\.id_dealership',
        codigoCEE: 'input[name="code_ccee"]',
        informarMedido: '.iconArrow',
        medidorAguaLimpa: '#simple-popover > div.MuiPaper-root.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > div > div > div.select-tree-treeWrapper > div > div:nth-child(1)',
        medidotFronteira: '#simple-popover > div.MuiPaper-root.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > div > div > div.select-tree-treeWrapper > div > .opened > div:nth-child(1) > div:nth-child(1)',
        medidoAgua: '#simple-popover > div.MuiPaper-root.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > div > div > div.select-tree-treeWrapper > div > div.opened > div:nth-child(1) > .opened > div:nth-child(1)'



    }
}
