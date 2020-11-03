// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
  
  it('page2', () => {
  cy.visit('/page2')
  cy.contains('.home', 'this is page2.html')
  	
  })
  
})
