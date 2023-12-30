describe('Login test feautre', () => {
    it('User cannot access to protected route when is not logged in', () => {
        cy.visit('http://localhost:4173/')
        cy.url().should('eq', 'http://localhost:4173/login')
    })

    it('User with wrong credentials cannot pass', () => {
        cy.visit('/login')
        cy.get('#email').type('wrongadmin@admin.com')
        cy.get('#password').type('wrongadmin')
        cy.get('#login_btn').click()
        cy.contains('p','Wrong email or password')
        cy.visit('/')
        cy.url().should('eq', 'http://localhost:4173/login')
    })

    it('User can successfully login', () => {
        cy.visit('/login')
        cy.get('#email').type('admin@admin.com')
        cy.get('#password').type('admin')
        cy.get('#login_btn').click()
        cy.url().should('eq', 'http://localhost:4173/')
        cy.contains('h1', 'List of Posts') 
    })
})