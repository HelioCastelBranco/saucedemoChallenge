const URL = 'https://www.saucedemo.com/'
const userName = '[data-test="username"]'
const passWord = '[data-test="password"]'
const loginBtn = '[data-test="login-button"]'

export function LoginPage() {
    cy.visit(URL)
}

export function AddCredentials(userData) {
    cy.get(userName).click().type(userData.userName);
    cy.get(passWord).click().type(userData.passWord);
    cy.get(loginBtn).click();
}