// https://on.cypress.io/api

describe('Counter feature', () => { 
  it('User can access to page', () => {
    cy.visit('/')
    cy.get('h1').contains('Counter app')
    cy.get('button').contains('Increment')
    cy.get('button').contains('Decrement')
    cy.get('#counter-info').contains('0')
  })
  it('User can increment counter', () => { 
    cy.visit('/')
    cy.get('button').contains('Increment').click()
    cy.get('#counter-info').contains('1')
  })
})