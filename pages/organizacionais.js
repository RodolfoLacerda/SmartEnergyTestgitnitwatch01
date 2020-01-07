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
            .waitForElementVisible('@organizacionais', 1000)
            .click('@organizacionais')
            .pause(2000)
            .waitForElementVisible('@adicionarOrganiza', 2000)
            .click('@adicionarOrganiza')
            .pause(3000)

    },

    editarOrganizacao: function(){
        return this
        .navigate()
        .waitForElementVisible('@menu', 10000)
        .waitForElementVisible('@acessarMenu', 2000)
        .click('@acessarMenu')
        .waitForElementVisible('@cadastroGlobais', 5000)
        .click('@cadastroGlobais')
        .pause(2000)
        .waitForElementVisible('@organizacionais', 1000)
        .click('@organizacionais')
        .pause(2000)
    },

    informarTipo: function (tipo) {
       
        const browser = this

        switch (tipo) {
            case 'Segmento':
                browser
                    .waitForElementVisible('@selecionarTipo', 2000)
                    .click('@selecionarTipo')

                    .waitForElementVisible('@informarSegmento', 2000)
                    .click('@informarSegmento')
                    .api.keys(browser.api.Keys.TAB)

                break;
            case 'Diretoria':
                browser
                    .waitForElementVisible('@selecionarTipo', 2000)
                    .click('@selecionarTipo')

                    .waitForElementVisible('@informarDiretoria', 2000)
                    .click('@informarDiretoria')
                    .api.keys(browser.api.Keys.TAB)
                break;

        }

        return this.pause(1000)

    },

    informarDescricao: function (descricao) {
  
        const browser = this

        browser
            .setValue('@descricao', descricao)
            .click('@salvar')

        return this.pause(1000)
    },

    adicionarOrganiza: function(){
        return this
        .waitForElementVisible('@adicionarOrganiza', 2000)
        .click('@adicionarOrganiza')
    },

    salvar: function(salvar){
        const browser = this

        browser
        .waitForElementVisible('@salvar')
        .click('@salvar', salvar)
        return this.pause(1000)

    },

    confirmarcadastro: function (){
    
        const browser = this

        browser
        .waitForElementVisible('@mensagem', 10000)
        .assert.containsText('@mensagem', 'Dados salvos com sucesso.')

        return this.pause(1000)
    },

    pesquisarDescricao: function (pesquisar){
        return this
        .waitForElementVisible('@descricaopesquisar', 2000)
        .setValue('@descricaopesquisar', pesquisar)
        .click('@pesquisarLupa')
        .click('@botãoEditar')
        .waitForElementVisible('@editarOrganizacao')
        .click('@editarOrganizacao')
    },

    pesquisar: function (pesquisar){
        return this
        .waitForElementVisible('@descricaopesquisar', 2000)
        .setValue('@descricaopesquisar', pesquisar)
        .click('@pesquisarLupa')
        
    },

    inativar: function(){
        return this
        .waitForElementVisible('@inativa', 2000)
        .click('@inativa')
    },

    editarDescricaoTexto: function(descricao){
      
        const browser = this

        browser
        .waitForElementVisible('@descricao', 2000)
        .click('@descricao')
        
        for (let i = 0; i < 17; i++) {
            browser .api.keys(browser.api.Keys.BACK_SPACE)
        
        }

        browser
        .setValue('@descricao', descricao)

        return this.pause(1000)
    },

    clicarExposrtar: function(){
        return this
        .waitForElementVisible('@exportar', 2000)
        .click('@exportar')
        .waitForElementVisible('@excel', 2000)
        .click('@excel')
        .pause(8000)
    },

    verificarArquivo: function(fileName){
       let fullPath = require ('path').resolve(__dirname, '../images/' + fileName)

       console.log(fullPath)

       return this.click('@excel', fullPath)

    },

    justificativa: function(justificativa){
        return this
        .waitForElementVisible('@justificativa', 2000)
        .setValue('@justificativa', justificativa)
    }

   
}




module.exports = {
    url: '/',
    commands: [acesso],
    elements: {
        menu: '.MuiIconButton-edgeStart',
        acessarMenu: '.MuiIconButton-colorSecondary',
        cadastroGlobais: '.MuiList-root > .MuiButtonBase-root:nth-child(1) .MuiTypography-root',
        organizacionais: '.MuiTypography-root:nth-child(4) .MuiTypography-root',
        adicionarOrganiza: '.MuiButton-contained > .MuiButton-label',
        selecionarTipo: '#type',
        informarSegmento: '.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(5)',
        informarNegocio: '#menu-type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        informarDiretoria: '#menu-type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(2)',
        informarContabil: '#menu-type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(4)',
        informarProduto: '#menu-type > div.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation8.MuiPopover-paper.MuiPaper-rounded > ul > li:nth-child(5)',
        descricao: '.MuiInputBase-inputMultiline',
        salvar: '.MuiButton-containedPrimary > .MuiButton-label',
        mensagem: '#client-snackbar',
        mensagemexistente: '#client-snackbar',
        descricaopesquisar: '#RGVzY3Jp5\\+Nv',
        pesquisarLupa: '.MuiInputAdornment-root .MuiSvgIcon-root',
        botãoEditar: '.MuiTableCell-root:nth-child(1) path',
        editarOrganizacao: '.MuiGrid-item > .MuiButtonBase-root .MuiSvgIcon-root',
        exportar: '.MuiButton-outlined > .MuiButton-label',
        excel: '.MuiButtonBase-root:nth-child(2) > .MuiListItemIcon-root',
        inativa: '#root > div > div > div > div > div > table > tbody > tr > td:nth-child(5)',
        justificativa: '#name'

    

    }
}

