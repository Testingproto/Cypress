/// <reference types="Cypress" />
import example from '../../fixtures/example.json'
import {email} from './randomemail'
import Links from '../../support/defaultfunctions/Allcomands'
import commands from '../../support/defaultfunctions/Allcomands'
describe("Facebook",()=>{
   before(()=>{
      cy.visit('/');
   })
   it("Facebook sign up and then log out",()=>{
   cy.on('uncaught:exception', () => false)
   const links = new Links();
   const Commands = new commands();
    //taking random email address by using math.random
   const email1 = `test${Math.floor(Math.random()*100000)}@gmail.com`;
   const username = Math.random().toString(36).slice(2,6)
   
    // Changing page language from hindi to english
    cy.findByRole('link', { name: "English (UK)" }).click();
    //Checking email field to be visible
    cy.findByTestId("royal_email").should('be.visible');
    //typing email which was generated using math.random and taking the variable name email
    cy.findByTestId("royal_email").type(email());
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
   cy.findByPlaceholderText('First name').type(example.firstName);
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
    //Slecting year which is stored in fixture file and checking the value
    cy.findByLabelText('Year').select(example.year).should('have.value',example.year);
    cy.findByRole('radio',{name: "Female"}).check().should('be.checked');
   //  links.termsLink().eq(1).click({force: true})
    //checking sign up button to be visible
    cy.findByRole('button',{name: "Sign Up"}).should('be.visible');
    //clicking on sign up button
    cy.findByRole('button',{name:"Sign Up"}).click();
   //using api response intercept method to wait sign up to complete
   cy.intercept('POST','https://en-gb.facebook.com/ajax/register.php').as('signUp');
   cy.wait('@signUp');
   //Checking url 
   cy.url().should('include','https://www.facebook.com/checkpoint');
   //checking text on the pop up 
   cy.contains('We need more information').should('be.visible');
   //checking button continue on pop up
   cy.contains('Continue').click();
   })
//    after(()=>{
//     //clicking on more options dropdown
//       cy.findByLabelText('More options').click();
//       //clicking on logout button
//       cy.findByText('Log Out').click();
//       //clicking on logout button on confirmation pop up
//       cy.findByText('Log Out').click();
//       cy.visit('/');
//    })
})