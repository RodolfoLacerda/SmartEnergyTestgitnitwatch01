const { client } = require('nightwatch-api')
const { When, Then, Given, And } = require('cucumber')

Given('que acesso a tela para realizar um cadastro de ponto de medicao', function () {
    let pontomedicao = client.page.pontomedicao()

    return pontomedicao.with()
});

Given('infomo o tipo de medicao {string}', function (string) {
    let pontomedicao = client.page.pontomedicao()

    return pontomedicao.informarmedicao()
});

Given('informo a tag do medidor {string}', function (string) {
    let pontomedicao = client.page.pontomedicao()

    return pontomedicao.informarmedidor()
});

Given('informo o nome da empresa associada {string}', function (string) {
    let pontomedicao = client.page.pontomedicao()

    return pontomedicao.informarEmpresaAssociada()
});

Given('informo a concessionaria conectada {string}', function (string) {
    let pontomedicao = client.page.pontomedicao()
});

Given('informo o codigo do CEE {string}', function (cee) {
    let pontomedicao = client.page.pontomedicao()

    return pontomedicao.informarCodigoCee(cee)
});

Given('informo o medidores {string}', function (string) {
    let pontomedicao = client.page.pontomedicao()

    return pontomedicao.informarmedido()
});

When('solicito para salvar o ponto de medicao', function () {
    let pontomedicao = client.page.pontomedicao()
});