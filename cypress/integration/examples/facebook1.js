
import example from '../../fixtures/example.json'
import commands from '../../support/defaultfunctions/Allcomands'

describe("Facebook",()=>{
   beforeEach(()=>{
      cy.visit('/')
      // cy.findByRole('link', { name: "English (UK)" }).click();
   })

   it("Facebook sign up and then log out",()=>{
   cy.on('uncaught:exception', () => false)
   const Commands = new commands();
    //taking random email address by using math.random
   const email1 = `test${Math.floor(Math.random()*100000)}@gmail.com`;
    // Changing page language from hindi to english
    //Checking email field to be visible
    cy.findByTestId("royal_email").should('be.visible');
    //typing email which was generated using math.random and taking the variable name email
    cy.findByTestId("royal_email").type(Commands.randomEmail());
    //Checking password field to be visible
    cy.findByLabelText("Password").should('be.visible');
    //taking password which is stored in fixture file
    cy.findByLabelText("Password").type(example.password);
    // unhiding password
    cy.findAllByRole('button').eq(0).click() 
    //checking password is visible now
    cy.findByLabelText("Password").should('have.attr','type','text'); 
    // hiding password
    cy.findAllByRole('button').eq(0).click(); 
    // checking password is hidden now
    cy.findByLabelText("Password").should('have.attr','type','password'); 
    //checking login button is visible
    cy.findByTestId('royal_login_button').should('be.visible');
    //checking forgotten password cta is visible
    cy.findByRole('link',{name: "Forgotten password?"}).should('be.visible');
    //clicking on //create new account button
    cy.findByTestId('open-registration-form-button').click();
    //taking first name which is stored in fixture file
   //  cy.findByPlaceholderText('First name').type(example.firstName);
   cy.findByPlaceholderText('First name').type(Commands.generateRandomUsername(10));
    //taking last name which is stored in fixture file
    cy.findByLabelText('Surname').type(example.lastName);
    //typing email which was generated using math.random and taking the variable name email
    let r=cy.findByLabelText('Mobile number or email address').type(email1);
    //reentering the same email which was generated using math.random and taking the variable name email
    cy.findByLabelText('Re-enter email address').type(email1);
    //taking password which is stored in fixture file
    // cy.findByRole('textbox',{name:'New password'}).type(example.password);
    cy.findByLabelText('New password').type(example.password);
    //Selecting date which is stored in fixture file and checking the value
    cy.findByLabelText('Day').select(example.date).should('have.value',example.date);
    //Selecting month which is stored in fixture file and checking the value
    cy.findByLabelText('Month').select(example.month).should('have.value','8');
    //Selecting year which is stored in fixture file and checking the value
    cy.findByLabelText('Year').select(example.year).should('have.value',example.year);
    cy.findByRole('radio',{name: "Female"}).check().should('be.checked');
   })
   it('clicking on terms link',()=>{
      const Commands = new commands();
      cy.findByTestId('open-registration-form-button').click();
      Commands.termsLink().eq(1).click()
      cy.go('back')
   })
   it('smoke',()=>{
      const Commands = new commands();
      cy.findByTestId('open-registration-form-button').click();
      Commands.termsLink1()
      cy.go('back')
   }).tags('smoke')
})