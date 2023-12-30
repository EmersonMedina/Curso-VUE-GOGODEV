// https://on.cypress.io/api

describe('Post Test Feauture', () => {
  beforeEach(() => {
    cy.login('admin@admin.com', 'admin')
    cy.url().should('eq', 'http://localhost:4173/')  
  }),
  it('Logged user can access to posts page and view the posts list', () => {
    cy.url().should('eq', 'http://localhost:4173/')
    cy.contains('h1', 'List of Posts')
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
  })

  it ('Logged user can access to detail post view', () => {
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
    cy.url().should('eq', 'http://localhost:4173/detail/1')
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
  })

  it ('Logged user can go back from detail post view', () => {
    cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
    cy.url().should('eq', 'http://localhost:4173/detail/1')
    cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
    cy.get('.link').click()
    cy.url().should('eq', 'http://localhost:4173/')
    cy.contains('h1', 'List of Posts')
  })
})
