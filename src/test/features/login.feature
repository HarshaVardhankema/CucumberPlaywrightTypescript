Feature: Login validation

Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter my username and password
    Then I should be redirected to the dashboard
