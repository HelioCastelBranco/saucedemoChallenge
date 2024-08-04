const firstNameSelector = '[data-test="firstName"]'
const lastNameSelector = '[data-test="lastName"]'
const postalCodeSelector = '[data-test="postalCode"]'
const continueBttn = '[data-test="continue"]'


export function CompleteCheckoutProcess(personalData) {
    cy.get(firstNameSelector).type(personalData.firstName);
    cy.get(lastNameSelector).type(personalData.lastName);
    cy.get(postalCodeSelector).type(personalData.postalCode);
    cy.get(continueBttn).click();
}
