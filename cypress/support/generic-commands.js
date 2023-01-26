import GenericFunctions from "../pageObjects/helpers/genericFunctions";
import LoginPage from "../pageObjects/pages/loginPage";

const genericFunctions = new GenericFunctions();
const loginPage = new LoginPage();

Cypress.Commands.add("clickSelectedButton", (buttonName) => {
  genericFunctions.clickButton(buttonName);
});

Cypress.Commands.add("forcefullyClickButton", (buttonName) => {
  genericFunctions.forceClickButton(buttonName);
});

Cypress.Commands.add("verifyURL", (endPoint) => {
  genericFunctions.assertURL(endPoint);
});

Cypress.Commands.add("logout", () => {
  genericFunctions.displayMenuOnNavbar();
  genericFunctions.clickMenuOnNavbar("Logout");
});

Cypress.Commands.add("login", (userDetails) => {
  cy.visit("/login");
  loginPage.enterEmailAddress(userDetails.email);
  loginPage.enterPassword(userDetails.password);
  cy.clickSelectedButton("Login");
  cy.verifyURL("/dashboard");
});

Cypress.Commands.add("clickOnMenu",(menu)=>
{
  genericFunctions.clickOnSideMenu(menu)
})

Cypress.Commands.add("assertToast",(str)=>
{
  genericFunctions.assertToastMessage(str)
})

Cypress.Commands.add("clickCloseModal",()=>
{
  genericFunctions.closeModal();
})
