var acesso = {
    with: function () {
        return this
            .navigate()
            .waitForElementVisible('@menu', 10000)
            .waitForElementVisible('@acessarMenu', 2000)
            .click('@acessarMenu')
            .waitForElementVisible('@cadastroComercializacao', 5000)
            .click('@cadastroComercializacao')
            .pause(2000)
            .waitForElementVisible('@selecionarativo', 15000)
            .click('@selecionarativo')
            .waitForElementVisible('@adicionarativo')
            .click('@adicionarativo')
            .pause(5000) 
    },

    informarempresa: function (){
        return this
        .waitForElementVisible('@selecionarempresa', 2000)
        .click('@selecionarempresa')
        .waitForElementVisible('@informarempresa')
        .click('@informarempresa')
        
    },

    informarperfilassociado: function (){
        return this
        .waitForElementVisible('@selecionarperfilassociado', 2000)
        .click('@selecionarperfilassociado')
        .waitForElementVisible('@informarperfilassociado', 2000)
        .click('@informarperfilassociado')
    },

    informarcodigosiga: function (codigosiga) {
        return this
        .waitForElementVisible('@codigosiga', 2000)
        .setValue('@codigosiga', codigosiga)
      
    },

    informarselecionarsubmercado: function(){
        const browser = this

        browser
        .waitForElementVisible('@selecionarsubmercado', 1000)
        .click ('@selecionarsubmercado')

        .waitForElementVisible('@informarsubmercado', 3000)
        .click('@informarsubmercado')
        
        return this.pause(1000)
    }
}

module.exports = {
    url: '/',
    commands: [acesso],
    elements: {
        menu: '.MuiIconButton-edgeStart',
        acessarMenu: '.MuiIconButton-colorSecondary',
        cadastroComercializacao: '.MuiList-root > .MuiButtonBase-root:nth-child(3) .MuiTypography-root',
        selecionarativo: '.MuiList-root:nth-child(4) > .MuiTypography-root:nth-child(3) .MuiTypography-root',
        adicionarativo: '.MuiButton-contained > .MuiButton-label',
        selecionarempresa: '#id_company\\.id_company',
        informarempresa: '#id_company\\.id_company-option-1',
        selecionarperfilassociado: '#id_profile\\.id_profile',
        informarperfilassociado: '#id_profile\\.id_profile-option-27',
        codigosiga: '#id_ccee_siga\\.code_ccee',
        selecionarsubmercado: '#id_submarket\\.id_submarket',
        informarsubmercado: '#menu-id_submarket\\.id_submarket > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(1)'
       
       
    }
}




