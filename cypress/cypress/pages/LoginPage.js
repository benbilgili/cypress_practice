class LoginPage {
    // Selectors
    usernameInput = "input#username";
    passwordInput = "input#password";
    loginButton = "button[name='login']";

    welcomeMessage = "p:nth-of-type(1) > strong:nth-of-type(1)"
  
    // Actions
    login(username, password) {
      cy.get(this.usernameInput).clear().type(username);
      cy.get(this.passwordInput).clear().type(password);
      cy.get(this.loginButton).click();
    }

    verifyLogin(name) {
        cy.get(this.welcomeMessage).contains(name)
    }
  }
  
  export default new LoginPage();