var acesso = {
    with: function () {
        return this
            .navigate()
            .waitForElementVisible('@menu', 10000)
            .waitForElementVisible('@acessarMenu', 2000)
            .click('@acessarMenu')
            .waitForElementVisible('@comercializacao', 5000)
            .click('@comercializacao')
            .pause(2000)
            .waitForElementVisible('@perfil', 15000)
            .click('@perfil')
            .pause(2000)
            .waitForElementVisible('@adicionarperfil', 15000)
            .click('@adicionarperfil')
    },

    pesquisarperfil: function () {
        return this
        .navigate()
        .waitForElementVisible('@menu', 10000)
        .waitForElementVisible('@acessarMenu', 2000)
        .click('@acessarMenu')
        .waitForElementVisible('@comercializacao', 15000)
        .click('@comercializacao')
        .pause(2000)
        .waitForElementVisible('@perfil', 15000)
        .click('@perfil')  
    },

    informarAgenteAssociado: function(){
        return this
        .waitForElementVisible('@selecionarAssociado', 3000)
        .click('@selecionarAssociado')

        .waitForElementVisible('@informarAssociado', 2000)
        .click('@informarAssociado')
    },

    informarcodigoCEE: function(codigo){
        return this
        .setValue('@codigoCEE', codigo)
        
    },

    informarNome: function(nome){
        return this
        .setValue('@perfilCEE', nome)
    },

    informarperfilAgente: function(agente){
        
        const browser = this

        browser
            .setValue('@perfilAgente', agente)
            .click('@salvar')

        return this.pause(1000)
     
    },

    salvar: function(){
        const browser = this

        browser
        .waitForElementVisible('@salvar')
        .click('@salvar')
        return this.pause(1000)

    },


    adicionarPerfil: function(){
        return this
        .waitForElementVisible('@adicionarperfil', 3000)
        .click('@adicionarperfil')
    },

    confirmarcadastro: function (){
    
        const browser = this

        browser
        .waitForElementVisible('@mensagem', 10000)
        .assert.containsText('@mensagem', 'Dados Salvos com Sucesso.')
        

        return this.pause(1000)
    },

    informarpesquisarcodigo: function(pesquisarcodigo){
        return this
        .waitForElementVisible('@pesquisarcodigo', 2000)
        .setValue('@pesquisarcodigo', pesquisarcodigo)
        .waitForElementVisible('@lupa', 2000)
        .click('@lupa')
        
    },

    editarnome: function(nome){
        const browser = this

        browser
        .waitForElementVisible('@selecionareditar', 2000)
        .click('@selecionareditar')
        .waitForElementVisible('@editar', 2000)
        .click('@editar')
        .pause(5000)
        .waitForElementVisible('@perfilCEE', 2000)
        .click('@perfilCEE')

        for (let i = 0; i < 50; i++) {
            browser .api.keys(browser.api.Keys.BACK_SPACE)
        }

        browser
        .setValue('@perfilCEE', nome)
        .pause(5000)

        return this.pause(1000)
    },

    inativarperfil: function(){
        return this
        .waitForElementVisible('@inativar', 2000)
        .click('@inativar')
        .pause(5000)
    },

    informarjustificativa: function(justificativa){
        return this
        .waitForElementVisible('@justificativa', 2000)
        .setValue('@justificativa', justificativa)
        .waitForElementVisible('@confirmarjustificativa')
        .click('@confirmarjustificativa')
    },

    selecionarstatus: function(){
        return this
        .waitForElementVisible('@status', 2000)
        .click('@status')
        .waitForElementVisible('@statusnao')
        .click('@statusnao')
        .pause(5000)
    }

}
       
module.exports = {
    url: '/',
    commands: [acesso],
    elements: {
        menu: '.MuiIconButton-edgeStart',
        acessarMenu: '.MuiIconButton-colorSecondary',
        comercializacao: '.MuiButtonBase-root:nth-child(3) .MuiTypography-root',
        perfil: '.MuiList-root:nth-child(4) > .MuiTypography-root:nth-child(2) .MuiTypography-root',
        adicionarperfil: '.MuiButton-contained > .MuiButton-label',
        codigoCEE: '#code_ccee',
        perfilCEE: '#name_ccee',
        perfilAgente: '#profile_ccee\\.name_profile',
        salvar: '.MuiButton-containedPrimary > .MuiButton-label',
        selecionarAssociado: '#profile_ccee\\.id_agents',
        informarAssociado: '#profile_ccee\\.id_agents-option-1',
        mensagem: '#client-snackbar',
        pesquisarcodigo: 'input[id="Q/NkaWdvIENDRUU"]',
        lupa: '.MuiTableCell-root:nth-child(5) > .MuiFormControl-root .MuiSvgIcon-root',
        selecionareditar: '.MuiTableRow-root:nth-child(1) > .MuiTableCell-root:nth-child(1) path',
        editar: '.MuiSvgIcon-colorPrimary > path',
        inativar: '.MuiSwitch-root',
        justificativa: '#name',
        confirmarjustificativa: '.MuiButtonBase-root:nth-child(2) > .MuiButton-label',
        status: '.MuiSelect-outlined',
        statusnao: '.MuiPaper-root:nth-child(3) > .MuiList-root > .MuiButtonBase-root:nth-child(3)'
       
    }
}