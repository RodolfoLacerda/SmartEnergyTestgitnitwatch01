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
            .waitForElementVisible('@selecionaragente', 15000)
            .click('@selecionaragente')
            .waitForElementVisible('@adicionaragente', 15000)
            .click('@adicionaragente')
    },
    

    pesquisaragente: function () {
        return this
        .navigate()
        .waitForElementVisible('@menu', 10000)
        .waitForElementVisible('@acessarMenu', 2000)
        .click('@acessarMenu')
        .waitForElementVisible('@cadastroComercializacao', 5000)
        .click('@cadastroComercializacao')
        .pause(2000)
        .waitForElementVisible('@selecionaragente', 15000)
        .click('@selecionaragente')  
    },

    informarcodigoccee: function (codigoccee) {
        return this
            .setValue('@codigoccee', Math.floor(Math.random() * 11111111) - 99999999, codigoccee)
    },

    informarnomeagenteccee: function (nomeagenteccee){
        return this
        .setValue('@nomeagenteccee',nomeagenteccee)
    },

    informarnomeagentevale: function (nomeagentevale){
        return this
        .setValue ('@nomeagentevale', nomeagentevale)
    },

    informarempresa: function (empresa){
        const browser = this

        browser
        .waitForElementVisible('@selecionarempresa', 1000)
        .click ('@selecionarempresa')
        .waitForElementVisible('@informarEmpresaabc')
        .click('@informarEmpresaabc')
       

        return this.pause(1000)
    },

    salvar: function(){
        return this
        .waitForElementVisible('@salvar')
        .click('@salvar')
    },

    confirmarcadastro: function () {

        const browser = this

        browser
            .waitForElementVisible('@mensagem', 10000)
            .assert.containsText('@mensagem', 'Dados Salvos com Sucesso.')

        return this.pause(1000)
    },

    informarpesquisar: function (pesquisaragente){
        return this
        .waitForElementVisible('@pesquisaragente', 2000)
        .setValue('@pesquisaragente', pesquisaragente)
        .waitForElementVisible('@lupapesquisar', 2000)
        .click('@lupapesquisar')
        .pause(5000)
    },

    editaragente: function(){
        return this
        .waitForElementVisible('@editar', 2000)
        .click('@editar')
        .waitForElementVisible('@editardados')
        .click('@editardados')
    },

    editarnomeagente: function(nomeagentevale){
        const browser = this

        browser
        .waitForElementVisible('@nomeagentevale', 2000)
        .click('@nomeagentevale')
        for (let i = 0; i < 50; i++) {
            browser .api.keys(browser.api.Keys.BACK_SPACE)
        }

        browser
        .setValue('@nomeagentevale', nomeagentevale)
        .pause(5000)

        return this.pause(1000)
    },

    inativar: function(){
        return this
        .waitForElementVisible('@inativar', 2000)
        .click('@inativar')
        .pause(6000)
    },

    informarjustificativa: function(justificativa){
        return this
        .waitForElementVisible('@justificativa', 2000)
        .setValue('@justificativa', justificativa)
        .waitForElementVisible('@confirmarjustificativa', 3000)
        .click('@confirmarjustificativa')
        .pause(5000)
    },

    pesquisarstatus: function(){
        return this
        .waitForElementVisible('@selecionarstatus', 2000)
        .click('@selecionarstatus')
        .waitForElementVisible('@statusativo', 2000)
        .click('@statusativo')
    },

    listaragentes: function(){
        const browser = this

        browser
            .waitForElementVisible('@agentesativo', 10000)
            .assert.containsText('@agentesativo', 'Pedro e Isabel Buffet ME')

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
        selecionaragente: '.MuiList-root:nth-child(4) > .MuiTypography-root:nth-child(1) .MuiTypography-root',
        adicionaragente: '.MuiButton-contained > .MuiButton-label',
        codigoccee: 'input[name="code_ccee"]',
        nomeagenteccee: 'input[name="name_ccee"]',
        nomeagentevale: 'input[name="ccee_agent.vale_name_agent"]',
        selecionarempresa: 'input[name="ccee_agent.id_company"]',
        informarEmpresaabc: '#ccee_agent\\.id_company-option-11',
        salvar: '.MuiButton-containedPrimary > .MuiButton-label',
        mensagem: '#client-snackbar',
        pesquisaragente: '#Tm9tZSBkbyBBZ2VudGUgQ0NFRQ',
        lupapesquisar: '.MuiTableCell-root:nth-child(4) > .MuiFormControl-root .MuiSvgIcon-root',
        editar: '.MuiTableCell-root:nth-child(1) .MuiSvgIcon-root',
        editardados: '.MuiSvgIcon-colorPrimary',
        inativar: '.MuiSwitch-root',
        justificativa: '#name',
        confirmarjustificativa: '.MuiButtonBase-root:nth-child(2) > .MuiButton-label',
        selecionarstatus: '.MuiSelect-outlined',
        statusativo: '.MuiPaper-root:nth-child(3) > .MuiList-root > .MuiButtonBase-root:nth-child(2)',
        agentesativo: '.MuiTableRow-root:nth-child(3) > .MuiTableCell-root:nth-child(6)'


        

    }
}




