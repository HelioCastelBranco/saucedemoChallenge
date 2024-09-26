/// <reference types="cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import * as registration_form_page from '../../support/page_objects/registration_form_page';
import * as HomePage from '../../support/page_objects/home_page'
import * as CheckOutPage from '../../support/page_objects/checkout_page'

////////////////////////// Given ///////////////////////////////////
Given('I have two products in the cart', () => {
    HomePage.ValCartBadgeExists();
});

Given('I am viewing the cart {string}', (headerName) => {
    HomePage.ValHeader(headerName);
});

////////////////////////// When ///////////////////////////////////
When('I view the cart {string}', (headerName) => {
    HomePage.OpenCart();
    HomePage.ValHeader(headerName);
});

///Porceeed checkout////
When('I proceed to checkout', () => {
    CheckOutPage.openCheckout();
});

////////////////////////// Then ///////////////////////////////////
Then('I should see a confirmation of my order {string}', (headerName) => {
    HomePage.ValHeader(headerName);
    CheckOutPage.ValCheckout();
    CheckOutPage.OrderConfirmation();
    HomePage.ValHeader('Checkout: Complete!');
})

Then('I should see all added products', () => {
    CheckOutPage.ValCartItems();
});

////////////////////////// And ///////////////////////////////////
And('I complete the purchase process', () => {
    cy.fixture('purchase').then((purchase) => {
        registration_form_page.CompleteCheckoutProcess(purchase.personalData);
    });
});