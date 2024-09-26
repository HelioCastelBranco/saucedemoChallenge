/// <reference types="cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import * as HomePage from '../../support/page_objects/home_page'

////////////////////////// Given ///////////////////////////////////
Given('I am on the home page {string}', (headername) => {
    HomePage.ValHeader(headername);
})

////////////////////////// When ///////////////////////////////////
When('I add two products to the cart', () => {
    HomePage.AddItemsToCart();
});

////////////////////////// Then ///////////////////////////////////
Then('The products should be added to the cart', () => {
    HomePage.ValCartBadgeExists();
});
///////////7
