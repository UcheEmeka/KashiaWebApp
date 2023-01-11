class GenericFunctions {
  //Assert the URL using
  assertURL(endpoint) {
    cy.location({timeout: 10000}).should((loc)=>
    {
      expect(loc.pathname).to.eq(endpoint)
    })
  }

  //Click on a button with name
  clickButton(buttonName) {
    cy.contains("button", buttonName).click();
  }

  displayMenuOnNavbar() {
    cy.get(".top-navbar-options").invoke("show");
  }

  clickMenuOnNavbar(menuOption) {
    cy.get(".top-navbar-option>p").each(($el) => {
      if ($el.text().includes(menuOption)) {
        cy.wrap($el).click();
      }
    });
  }

  clickOnSideMenu(menuName) {
    cy.get(".sidebar-menu p").each(($el) => {
      if ($el.text().includes(menuName)) {
        cy.wrap($el).click();
      }
    });
  }

  assertToastMessage(str)
  {
    cy.get(".toast-body>span").should('include.text',str)
  }
}
export default GenericFunctions;

//User data
const validUser = () => {
  return Cypress.env("qa");
};

export { validUser };
