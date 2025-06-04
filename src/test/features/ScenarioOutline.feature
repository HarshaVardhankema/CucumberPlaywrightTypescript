Feature: Checking the Scenario Outline feature

  Scenario Outline: Testing the Scenario Outline with different examples
    Given Navigating to midoc patient page
    Then Entering the username as "<username>" and password as "<password>"
    When Clicking on the login button
    Then Verifying the login is successful

    Examples:
      | username         | password |
      | jenson@gmail.com | midoc123 |
      #| vegas@gmail.com  | midoc123 |
