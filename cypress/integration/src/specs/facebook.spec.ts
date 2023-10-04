
import {facebook} from "../page-objects/facebook";
//This is spec file
const links = new facebook();
describe('Facebbok site', () => {
    it('login into facebook', () => {
    cy.visit('https://www.facebook.com')
    })
});