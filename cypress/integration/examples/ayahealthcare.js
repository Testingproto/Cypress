describe('Login Test', () => {
    it('Logs in to Aya Healthcare', () => {
        cy.viewport(1280, 720)
      cy.visit('https://www.ayahealthcare.com')
    //   cy.findByRole('link',{name:"Login icon"}).click();
      cy.get('[data-href="/"] > .navbar-item--primary').realHover();
      // cy.findByLabelText('submenu').should('be.visible')
      cy.get('[aria-label="submenu"]').should('be.visible')
      cy.get('a').contains('Nursing').click()
    //   cy.findByRole('StaticText',{name:"Travel"}).trigger('mouseover');
    //   cy.get('#username').type('your-username')
    //   cy.get('#password').type('your-password')
    //   cy.get('#login-button').click()
    //   cy.get('.dashboard').should('exist')
    })
  })