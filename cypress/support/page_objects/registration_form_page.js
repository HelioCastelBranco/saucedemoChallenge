const firstNameSelector = '[data-test="firstName"]'
const lastNameSelector = '[data-test="lastName"]'
const postalCodeSelector = '[data-test="postalCode"]'
const continueBttn = '[data-test="continue"]'


// Function to complete the checkout process by filling in personal data and proceeding
export function CompleteCheckoutProcess(personalData) {
    // Type the provided first name into the first name input field
    cy.get(firstNameSelector).type(personalData.firstName);
    // Type the provided last name into the last name input field
    cy.get(lastNameSelector).type(personalData.lastName);
    // Type the provided postal code into the postal code input field
    cy.get(postalCodeSelector).type(personalData.postalCode);
    // Click the continue button to proceed with the checkout process
    cy.get(continueBttn).click();
}
