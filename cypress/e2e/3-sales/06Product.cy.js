import { validUser } from "../../pageObjects/helpers/genericFunctions";
import ProductPage from "../../pageObjects/pages/ProductPage";

const productPage = new ProductPage()

describe("Products & Services Test Suite",{testIsolation: false},() => {
  before("Login", () => {
    cy.login(validUser());
    cy.clickOnMenu("Sales");
    
    cy.intercept({
      method:'GET',
      url:'https://staging-api.kashiatech.com/sale-service/get-products'
    }). as('getProducts')

    cy.clickOnMenu("Product");
    cy.wait('@getProducts').its('response.statusCode').should('eq', 200)

    cy.verifyURL("/products");
  });

  it("Add a product/Service",()=>
  {
    cy.forcefullyClickButton("Add Product");
    productPage.enterProductData(0,"P11695")
    productPage.selectMeasurementType("Unit")
    productPage.enterProductData(1,"1000")
    productPage.uncheckChargeVAT()
    cy.clickSelectedButton("Save");
    cy.wait('@getProducts').its('response.statusCode').should('eq', 200)
    cy.assertToast("successfully")
    //Unnecessary delay in the UI forces this wait
    cy.wait(2000)
  })

  it("Add an existing product",  ()=>
  { 
    cy.get('new-product-form').should('not.exist')
    cy.forcefullyClickButton("Add Product");
    productPage.enterProductData(0,"PS2")
    productPage.selectMeasurementType("Unit")
    productPage.enterProductData(1,"1000")
    productPage.uncheckChargeVAT()
    
    cy.clickSelectedButton("Save");
    cy.assertToast("exist")      
    cy.clickCloseModal()
  })

  after("Logout", () => {
    cy.logout();
    cy.verifyURL("/relogin");
  });
});
