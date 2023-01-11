import { validUser } from "../../pageObjects/helpers/genericFunctions";
import ProductPage from "../../pageObjects/pages/ProductPage";

const productPage = new ProductPage()

describe("Products & Services Test Suite", () => {
  before("Login", () => {
    cy.login(validUser());
    cy.clickOnMenu("Sales");
    cy.clickOnMenu("Product");
    cy.verifyURL("/products");
  });

  it("Add a product/Service",()=>
  {
    cy.clickSelectedButton("Add Product");
    productPage.enterProductData(0,"PS2")
    productPage.selectMeasurementType("Unit")
    productPage.enterProductData(1,"1000")
    productPage.uncheckChargeVAT()
    cy.clickSelectedButton("Save");
    cy.assertToast("successfully")
  })

  after("Logout", () => {
    cy.logout();
    cy.verifyURL("/relogin");
  });
});
