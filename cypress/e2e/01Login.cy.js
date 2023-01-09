import LoginPage from "../pageObjects/pages/loginPage";

const loginPage = new LoginPage()
describe("Login", () => {
  before("Open the URL", () => {
    cy.visit('/login')
  });

  it("Login as a valid user", () => {
    loginPage.enterEmailAddress("sampleEmail@mail.com")
    loginPage.enterPassword("samplePassword")
    cy.clickSelectedButton('Login')
  });
});
