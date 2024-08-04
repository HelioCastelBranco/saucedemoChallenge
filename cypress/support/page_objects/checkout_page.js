const checkoutBttn = '[data-test="checkout"]'
const removeItemSelectors = [
    '[data-test="remove-sauce-labs-backpack"]',
    '[data-test="remove-sauce-labs-onesie"]'
];
const productName = '[data-test="inventory-item-name"]'
const productPrice = '[data-test="inventory-item-price"]'
const finishBttn = '[data-test="finish"]'



export function ValCartItems(expectedSelectors = removeItemSelectors) {
    expectedSelectors.forEach((selector, index) => {
        cy.fixture('purchase').then((purchase) => {
            // Verificar se o produto existe e contém o nome correto
            cy.get(productName).eq(index).should('exist').contains(purchase.products[index].name);

            // Capturar o preço do produto correspondente ao índice atual
            cy.get(productPrice).eq(index).invoke('text').then((text) => {
                // Ler o conteúdo atual do arquivo JSON
                cy.readFile('cypress/fixtures/purchase.json').then((currentData) => {
                    // Atualizar o preço do produto no JSON
                    currentData.products[index].price = text;

                    // Escrever o conteúdo atualizado de volta no arquivo JSON
                    cy.writeFile('cypress/fixtures/purchase.json', currentData);
                });
            });
        });

        // Verificar se o seletor existe e está visível
        cy.get(selector).should('exist').and('be.visible');
    });
}

export function ValCheckout(expectedSelectors = removeItemSelectors) {
    expectedSelectors.forEach((selector, index) => {
        cy.fixture('purchase').then((purchase) => {
            // Verificar se o produto existe e contém o nome correto
            cy.get(productName).eq(index).should('exist').contains(purchase.products[index].name);

            // Capturar o preço do produto correspondente ao índice atual
            cy.get(productPrice).eq(index).invoke('text').then((text) => {
                // Ler o conteúdo atual do arquivo JSON
                cy.readFile('cypress/fixtures/purchase.json').then((currentData) => {

                    if (currentData.products[index].price !== text) {
                        throw new Error(`Pre Checkout price: ${currentData.products[index].price}, does not match with checkout overview price: ${text}`);
                    }
                    else {
                        // Log de sucesso no Cypress
                        cy.log(`Pre Checkout price: ${currentData.products[index].price}, matches with checkout overview price: ${text}`);
                    }
                });
            });
        });
    });
}

export function OrderConfirmation() {
    cy.get(finishBttn).click();
}

export function openCheckout() {
    cy.get(checkoutBttn).click();
}