class ProductPage {
  //Can be used to enter the name of product & price
  enterProductData(value, str) {
    cy.get(".product-form .textfield-input-container>input")
      .eq(value)
      .clear()
      .type(str);
  }

  selectMeasurementType(str) {
    cy.get("select").eq(0).select(str);
  }

  uncheckChargeVAT() {
    cy.get("#vat-exemption").uncheck();
  }
}
export default ProductPage;
