describe('Login test feautre', () => {
    it('User cannot access to protected route when is not logged in', () => {
        cy.visit('http://localhost:4173/')
        cy.url().should('eq', 'http://localhost:4173/login')
    })

    it('User with wrong credentials cannot pass', () => {
        cy.login('wrongadmin@admin.com', 'wrongadmin' )
        cy.contains('p','Wrong email or password')
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:4173/login')
    })

    it('User can successfully login', () => {
        cy.login('admin@admin.com', 'admin')
        cy.url().should('eq', 'http://localhost:4173/')
        cy.contains('h1', 'List of Posts') 
    })
})