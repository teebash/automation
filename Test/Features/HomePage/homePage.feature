Feature: Find a mortgage rate
  As a new customer
  i want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  Background: Investor's page
    Given I have navigated to Mortgage rates page

  @Pending
  Scenario: Find mortgage rates
    Given I fill out Mortgage form with the following details respectively
      | nationwideMortage | No              |
      | typeOfMortgage    | Changing lender |
      | propertyValue     | £300,000        |
      | mortgageAmount    | £150,000        |
      | duration          | 30 years        |
      | mortgageType      | Fixed rate      |
      | productFee        | With Fee        |
    And the following results should be visible for selection
      | followingResults |
      | 2 yr Fixed       |
      | 3 yr Fixed       |
      | 5 yr Fixed       |
      | 10 yr Fixed      |
    When I click more infor and apply
    Then the page heading 'Start your remortgage application' should be visible