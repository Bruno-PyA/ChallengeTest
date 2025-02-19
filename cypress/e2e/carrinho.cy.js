describe('Carrinho de compras', () => {
  beforeEach(() => { //Garante que o código não repita
    //Visita o site
  
      cy.visit('https://www.saucedemo.com/')
  
      //É feito o login corretamente para acessar a pagina de shoppping
      cy.loginValido()
  
      // Verifica se está na página de shopping.
      cy.url().should('include', '/inventory.html')
  
    }) 

    it('Verificar se o produto adicionado, aparece corretamente', () => {

      // Adiciona o primeiro produto ao carrinho
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  
      // Clica no ícone do carrinho
      cy.get('.shopping_cart_link').click()
  
      // Verifica se o produto está no carrinho
      cy.get('.cart_item').should('be.visible')
      cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')

      //Verifica a remoção do produto
      cy.get('[data-test="remove-sauce-labs-backpack"]').click()
      cy.get('.cart_item').should('not.exist')

 } )})
 