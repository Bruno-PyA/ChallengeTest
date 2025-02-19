describe('login válido', () => {
  it('permiti-se o login com usuário e senha válido', () => {
    //Faz o acesso ao site
    cy.visit('https://www.saucedemo.com/')

    //Usa o comando de login com as credenciais correta
    cy.loginValido()

     // Verifica se o login foi bem-sucedido
    cy.url().should('include', '/inventory.html') //Verifica se após o login, a url contem esse complemento de endereço
   
})
})

describe('Login inválido', () => {
  it('Deve permanecer na mesma URL e exibir uma pequena mensagem de erro', () => {
    
    //Visita o site
    cy.visit('https://www.saucedemo.com/')
    cy.loginInvalido()

    //O comando "loginInvalido" da o click e, é verificado as credenciais e a validação de da permanencia de URL com a mensagem, utilizando os asserts
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
})
