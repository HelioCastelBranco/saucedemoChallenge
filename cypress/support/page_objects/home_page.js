const headerVal = '[data-test="title"]';
const cartBadge = '[data-test="shopping-cart-badge"]';
const cartButton = '[data-test="shopping-cart-link"]';
const itemSelectors = [
    '[data-test="add-to-cart-sauce-labs-backpack"]',
    '[data-test="add-to-cart-sauce-labs-onesie"]'
];

// Function to validate the text of a header element
export function ValHeader(headerText) {
    // Verify that the header element has the expected text
    cy.get(headerVal).should('have.text', headerText);
}

// Function to add items to the cart by clicking on each item selector
export function AddItemsToCart(items = itemSelectors) {
    items.forEach(itemSelector => {
        // Click on each item selector to add the item to the cart
        cy.get(itemSelector).click();
    });
}

// Function to validate the existence and visibility of the cart badge, and check that it contains the number '2'
export function ValCartBadgeExists() {
    // Verify that the cart badge exists, is visible, and contains the number '2'
    cy.get(cartBadge).should('exist').and('be.visible').contains('2');
}

// Function to open the cart by clicking the cart button
export function OpenCart() {
    // Click on the cart button to open the cart
    cy.get(cartButton).click();
}