/// <reference types="cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import * as LoginPage from '../../support/page_objects/login_page';
import * as HomePage from '../../support/page_objects/home_page';

Given('already on saucedemo page', () => {
     LoginPage.LoginPage();
})

When('I enter valid login credentials', () => {
     cy.fixture('purchase').then((purchase) => {
          LoginPage.AddCredentials(purchase.user);
     });
})

Then('I should be redirected to the home page', () => {
     HomePage.ValHeader('Products');
})