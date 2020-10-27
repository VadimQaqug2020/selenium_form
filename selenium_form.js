// Open https://the-internet.herokuapp.com/login

/// <reference types="cypress" />

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
it('Login valid', () => {
    cy.visit('https://the-internet.herokuapp.com/login') 
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()
    cy.get('[class="subheader"]').contains('Welcome').should('exist')

});
// 2. Login with invalid creds and check validation error
it('Login invalid', () => {
    cy.visit('https://the-internet.herokuapp.com/login') 
    cy.get('#username').type('wrong')
    cy.get('#password').type('wrong!')
    cy.get('[type="submit"]').click()
    cy.get('[class="flash error"]').contains('invalid').should('exist')
});
// 3. Logout from app and assert you successfully logged out
it('Login valid', () => {
    cy.visit('https://the-internet.herokuapp.com/login') 
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('[type="submit"]').click()
    cy.get('[class="button secondary radius"]').click()
    cy.get('[class="flash success"]').contains('logged out').should('exist')

});
