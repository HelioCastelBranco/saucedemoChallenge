const checkoutBttn = '[data-test="checkout"]'
const removeItemSelectors = [
    '[data-test="remove-sauce-labs-backpack"]',
    '[data-test="remove-sauce-labs-onesie"]'
];
const productName = '[data-test="inventory-item-name"]'
const productPrice = '[data-test="inventory-item-price"]'
const finishBttn = '[data-test="finish"]'


// Function to validate cart items and update their prices in the fixture file
export function ValCartItems(expectedSelectors = removeItemSelectors) {
    expectedSelectors.forEach((selector, index) => {
        cy.fixture('purchase').then((purchase) => {
              // Verify if the product exists and contains the correct name
            cy.get(productName).eq(index).should('exist').contains(purchase.products[index].name);

            // Capture the price of the product corresponding to the current index
            cy.get(productPrice).eq(index).invoke('text').then((text) => {
                // Read the current content of the JSON file
                cy.readFile('cypress/fixtures/purchase.json').then((currentData) => {
                    // Update the product price in the JSON file
                    currentData.products[index].price = text;

                    // Write the updated content back to the JSON file
                    cy.writeFile('cypress/fixtures/purchase.json', currentData);
                });
            });
        });
        // Verify if the selector exists and is visible
        cy.get(selector).should('exist').and('be.visible');
    });
}

// Function to validate checkout items and compare their prices with the fixture file
export function ValCheckout(expectedSelectors = removeItemSelectors) {
    expectedSelectors.forEach((selector, index) => {
        cy.fixture('purchase').then((purchase) => {
             // Verify if the product exists and contains the correct name
            cy.get(productName).eq(index).should('exist').contains(purchase.products[index].name);

            // Capture the price of the product corresponding to the current index
            cy.get(productPrice).eq(index).invoke('text').then((text) => {
               // Read the current content of the JSON file
                cy.readFile('cypress/fixtures/purchase.json').then((currentData) => {
// Compare the pre-checkout price with the checkout overview price
                    if (currentData.products[index].price !== text) {
                        throw new Error(`Pre Checkout price: ${currentData.products[index].price}, does not match with checkout overview price: ${text}`);
                    }
                    else {
                         // Log success message in Cypress
                        cy.log(`Pre Checkout price: ${currentData.products[index].price}, matches with checkout overview price: ${text}`);
                    }
                });
            });
        });
    });
}

// Function to click the finish button to confirm the order
export function OrderConfirmation() {
    cy.get(finishBttn).click();
}

// Function to click the checkout button to open the checkout page
export function openCheckout() {
    cy.get(checkoutBttn).click();
}