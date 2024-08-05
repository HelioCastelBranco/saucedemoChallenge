const URL = 'https://www.saucedemo.com/'
const userName = '[data-test="username"]'
const passWord = '[data-test="password"]'
const loginBtn = '[data-test="login-button"]'

export function LoginPage() {
    cy.visit(URL)
}

// Function to add user credentials and log in
export function AddCredentials(userData) {
    // Click on the username input field and type the provided username
    cy.get(userName).click().type(userData.userName);
    // Click on the password input field and type the provided password
    cy.get(passWord).click().type(userData.passWord);
    // Click on the login button to submit the login form
    cy.get(loginBtn).click();
}