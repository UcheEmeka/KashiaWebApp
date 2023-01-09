import LoginPage from "../../pageObjects/pages/loginPage";
import { validUser } from "../../pageObjects/helpers/GenericFunctions";

const loginPage = new LoginPage();
describe("Login", () => {
  before("Open the URL", () => {
    cy.visit("/login");
  });

  it("Login as a valid user", () => {
    loginPage.enterEmailAddress(validUser().email);
    loginPage.enterPassword(validUser().password);
    cy.clickSelectedButton("Login");
    cy.verifyURL("/dashboard");
  });

  after("Logout", () => {
    cy.logout();
    cy.verifyURL("/relogin");
  });
});
