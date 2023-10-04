/// <reference types="Cypress" />
import example from '../../fixtures/example.json'

describe("Facebook",()=>{
   before(()=>{
      cy.visit('/');
   })
   it("Facebook sign up and then log out",()=>{
   // function to generate new email address everytime
   // function generateNewEmail(){
   //    const r = Math.random().toString().slice(2,8)
   //    return `test${r}@gmail.com`
   // }
   // const email = GenerateNewEmail();
   const email = `test${Math.floor(Math.random()*100000)}@gmail.com`;
   // const password = `123@m56789`
    
    cy.findByRole('link', { name: "English (UK)" }).click();// changing from hindi to english language
    cy.findByTestId("royal_email").should('be.visible');
    cy.findByTestId("royal_email").type(email);
    cy.findByLabelText("Password").should('be.visible');
    cy.findByLabelText("Password").type(example.password);
    cy.findAllByRole('button').eq(0).click() // unhiding password
    cy.findByLabelText("Password").should('have.attr','type','text'); //checking password is visible now
    cy.findAllByRole('button').eq(0).click(); // hiding password
    cy.findByLabelText("Password").should('have.attr','type','password'); // checking password is hidden now
    cy.findByTestId('royal_login_button').should('be.visible');
    cy.findByRole('link',{name: "Forgotten password?"}).should('be.visible');
    cy.findByTestId('open-registration-form-button').click();
    cy.findByPlaceholderText('First name').type(example.firstName);
    cy.findByLabelText('Surname').type(example.lastName);
    cy.findByLabelText('Mobile number or email address').type(email);
    cy.findByLabelText('Re-enter email address').type(email);
    cy.findByLabelText('New password').type(example.password);
    cy.findByLabelText('Day').select('30').should('have.value','30');
    cy.findByLabelText('Month').select('Aug').should('have.value','8');
    cy.findByLabelText('Year').select('1988').should('have.value','1988');
    cy.findByRole('radio',{name: "Female"}).check().should('be.checked');
    cy.findByRole('button',{name: "Sign Up"}).should('be.visible');
    cy.findByRole('button',{name:"Sign Up"}).click();
   //  cy.wait(15000); //use api response 
    
   // cy.request('https://www.facebook.com').then((response)=>{
   //    expect(response.url).to.eq('https://www.facebook.com')
   // })
   cy.intercept('https://www.facebook.com').then((interception)=>{
      expect(interception.statusCode).to.eq(200)
   })
   cy.url().should('include','facebook.com');
   // cy.request({
   //    method: 'POST',
   //    url : 'https://en-gb.facebook.com/ajax/register.php',
   // }).then((response)=>{
   //      expect(response.status).to.eq(200)
   //      expect(response.url).to.eq('https://www.facebook.com')
   // })

   })
   // after(()=>{
   //    // cy.findByRole('button',{name: "More options"}).click()
   //    cy.findByLabelText('More options').click()
   //    cy.findByText('Log Out').click({force: true })
   // })
})