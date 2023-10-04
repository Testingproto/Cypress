/// <reference types="Cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.facebook.com');
  
    cy.findByTestId('royal_email').type('nh@gmail.com');
    cy.findByTestId("royal_pass").type('1234567');


  });
});