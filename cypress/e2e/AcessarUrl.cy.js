 //<reference types = "Cypress" /> 
describe('Validar Login', () => {
  xit('Acessa URL com Sucesso', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('div[class="logo pull-left"]').should('be.visible')
    cy.title().should('be.eq','Automation Exercise')
  })
  it('Cadastrar novo usuario', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a').contains('Signup / Login').click()
    cy.get('input[name = "name"]').should('be.visible').type("Isaias")
    cy.get('input[data-qa = "signup-email"]').should('be.visible').type("isaiasbezerra@hotmail.com")
    cy.get('button[data-qa = signup-button]').should('be.visible').click()
    cy.get('b').contains('Enter Account Information')
    cy.get('#id_gender1').click()
    cy.get('#password').click().type('123456')
    
    ///validação de preenchimento
    
    cy.get('input[name = "name"]').should('have.value','Isaias')
    cy.get('input[data-qa = "email"]').should('have.value','isaiasbezerra@hotmail.com')
    cy.get('#password').should('have.value','123456')
    
    /// lista de dias, mêses e anos

    cy.get('#days').select('22')
    cy.get('#months').select('June')
    cy.get('#years').select('1982')

    ///validação de preenchimento

    cy.get('#days').should('have.value','22')
    cy.get('#months').should('have.value','6').contains('June')
    cy.get('#years').should('have.value','1982')

  })
})