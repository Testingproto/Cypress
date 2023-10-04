describe('My test',()=>{
    it("My first test case",()=>{
        cy.visit('https://www.staging.airtable.com/')
        cy.get('.ActionGroup-module_actionGroupWrap__2CSAe > .Link-module_navLink__17BFl').click()
        cy.get('#emailLogin').type('giri@yopmail.com')
        cy.get('.pointer').click()
        cy.get('#passwordLogin').type('12345678')
        cy.get('.pointer').click()
        cy.get('[style="height: 192px;"] > .flex-inline').click()
        cy.get('.justify-end > .text-white').click()
    })
})