class LoginPage {
  //Get Email field & enter email address
  enterEmailAddress(emailAddress) {
    cy.get("#login-email").clear().type(emailAddress);
  }

  //Get Password field & enter password
  enterPassword(password) {
    cy.get("input[type='password']").clear().type(password);
  }
}
export default LoginPage;
