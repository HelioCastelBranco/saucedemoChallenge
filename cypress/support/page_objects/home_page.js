const headerVal = '[data-test="title"]';
const cartBadge = '[data-test="shopping-cart-badge"]';
const cartButton = '[data-test="shopping-cart-link"]';
const itemSelectors = [
    '[data-test="add-to-cart-sauce-labs-backpack"]',
    '[data-test="add-to-cart-sauce-labs-onesie"]'
];

export function ValHeader(headerText) {
    cy.get(headerVal).should('have.text', headerText);
}

export function AddItemsToCart(items = itemSelectors) {
    items.forEach(itemSelector => {
        cy.get(itemSelector).click();
    });
}

export function ValCartBadgeExists() {
    cy.get(cartBadge).should('exist').and('be.visible').contains('2');
}

export function OpenCart() {
    cy.get(cartButton).click();
}