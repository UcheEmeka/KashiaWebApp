import { validUser } from "../../pageObjects/helpers/genericFunctions";

describe("Products & Services Test Suite", () => {
  before("Login", () => {
    cy.login(validUser());
  });

  it("Navigate to Products page", () => {
    cy.clickOnMenu("Sales");
    cy.clickOnMenu("Product");
    cy.verifyURL("/products");
  });

  after("Logout", () => {
    cy.logout();
    cy.verifyURL("/relogin");
  });
});
