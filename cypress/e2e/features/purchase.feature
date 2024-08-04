Feature: Test the functionality of login, adding products to the cart, and completing the purchase
    As a user i want to add items to the cart and complete the purchase

    #https://jiraticket/552
    Scenario: Validate login proceadure
        Given already on saucedemo page
        When I enter valid login credentials
        Then I should be redirected to the home page

    Scenario: Adding products to the cart proceadure
        Given I am on the home page 'Products'
        When I add two products to the cart
        Then The products should be added to the cart

    Scenario: Validation of items in the cart
        Given I have two products in the cart
        When I view the cart 'Your Cart'
        Then I should see all added products

    Scenario: Completing the purchase proceadure
        Given I am viewing the cart 'Your Cart'
        When I proceed to checkout
        And I complete the purchase process
        Then I should see a confirmation of my order 'Checkout: Overview'