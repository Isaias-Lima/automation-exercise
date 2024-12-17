 //<reference types = "Cypress" /> 
describe('Validar Login', () => {
  xit('Acessa URL com Sucesso', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('div[class="logo pull-left"]').should('be.visible')
    cy.title().should('be.eq','Automation Exercise')
  })

  const nome = "Isaias"
  const email = "isaiasbezerra3@hotmail.com"
  xit('Cadastrar novo usuario', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a').contains('Signup / Login').click()
    cy.get('input[name = "name"]').should('be.visible').type(nome)
    cy.get('input[data-qa = "signup-email"]').should('be.visible').type(email)
    cy.get('button[data-qa = signup-button]').should('be.visible').click()
    cy.get('b').contains('Enter Account Information')
    cy.get('#id_gender1').click()
    cy.get('#password').click().type('123456')
    
    ///validação de preenchimento
    
    cy.get('input[name = "name"]').should('have.value',nome)
    cy.get('input[data-qa = "email"]').should('have.value',email)
    cy.get('#password').should('have.value','123456')
    
    /// lista de dias, mêses e anos

    cy.get('#days').select('22')
    cy.get('#months').select('June')
    cy.get('#years').select('1982')

    ///validação de preenchimento

    cy.get('#days').should('have.value','22')
    cy.get('#months').should('have.value','6').contains('June')
    cy.get('#years').should('have.value','1982')

    cy.get('#newsletter').click
    cy.get('#uniform-optin').click

    /// Address Information
    cy.get('#first_name').type('Isaias')
    cy.get('#last_name').type('Lima')
    cy.get('#company').type('Minsait')
    cy.get('#address1').type('Av. Edson Ramalho')
    cy.get('#country').select('Canada')
    cy.get('#state').type('Quebec')
    cy.get('#city').type('Saint-Henri')
    cy.get('#zipcode').type('g1a 1b4')
    cy.get('#mobile_number').type('418 98554 64212')
    cy.get("button").contains("Create Account").click()
    cy.get('H2[data-qa = "account-created"]').should("be.visible")
    cy.get('H2[data-qa = "account-created"]').should('have.text', 'Account Created!')
    cy.get('a[data-qa = "continue-button"]').contains("Continue").click()

    cy.get('a[fa fa-trash-o]').contains(" Delete Account").click()

    cy.get('H2[data-qa = "account-deleted"]').should("be.visible")

    cy.get('a[data-qa = "continue-button"]').contains("Continue").click()

  })
  ///cadastrar usuario ja existente já existe
  xit('verificar se o usuario ja esta Cadastrado', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('a').contains('Signup / Login').click()
    cy.get('input[name = "name"]').should('be.visible').type(nome)
    cy.get('input[data-qa = "signup-email"]').should('be.visible').type(email)
    cy.get('button[data-qa = signup-button]').should('be.visible').click()

  })

  ///Deletar acordo
  xit('Deletar acordo',() => {
    cy.visit('https://automationexercise.com/')
    cy.get('a').contains('Signup / Login').click()  
    cy.get('input[data-qa = "login-email"]').should('be.visible').type(email)
    cy.get('input[data-qa="login-password"]').click().type('123456')
    cy.get('button[data-qa="login-button"]').contains("Login").click()

    cy.get('a[fa fa-trash-o]').contains(" Delete Account")

    cy.get('a[data-qa = "continue-button"]').contains("Continue").click()

  })

  xit('verificar se acordo foi Deletado',() => {
    cy.visit('https://automationexercise.com/')
    cy.get('a').contains('Signup / Login').click()  
    cy.get('input[data-qa = "login-email"]').should('be.visible').type(email)
    cy.get('input[data-qa="login-password"]').click().type('123456')
    cy.get('button[data-qa="login-button"]').contains("Login").click()
    cy.get('p').contains("Your email or password is incorrect!")
    cy.get('p').contains("Your email or password is incorrect!").should('be.visible')
    
  })

})