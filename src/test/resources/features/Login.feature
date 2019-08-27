#Author: Olkar Sidiqui
Feature: Login feature

  Scenario: Valid login
    When I click on login Button
    And I enter valid email address
    And I enter valid password
    And I click on login
    Then I successfully sign into the freeCRM page

