#Author: gayathridevi_g@mindwaveventures.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@AcaciumPortal
Feature: Acacium Portal

  @Signin
  Scenario: Sign in
    Given Pass the Url
    When scroll down to sign in
    And wait for some seconds
    And click sign in button
    And User inputs the email id
    And user enters the password
    And user clicks not robot
    And scroll to enter
    And wait to click enter
    And user clicks enter
    And waits to navigate to new tab and copies the otp and gets back to the portal
    And user should paste code using robo class
    And user allows delay to verify
    Then user clicks verify

  @BookAndRearrangeInitialAssessment
  Scenario: Book and rearrange initial assessment
    When scroll down to book assessment cta
    And click the book assessment button
    And click yes after waiting for some seconds
    And click ok after waiting for some seconds
    And scroll down to calendar after waiting for some seconds
    And click previous and next dates to show all available dates
    And click on a date randomly from a list of dates available after waiting for some seconds
    And click on next after few seconds
    And choose a time slot randomly from the available list after few seconds
    And click on view appointments after some time
    And click on rearrange cta
    And click on yes
    And scroll down to calendar again after waiting for some seconds
    And click previous and next dates again to show all available dates
    And click on a date randomly from a list of dates available again after waiting for some seconds
    And click on next after few seconds again
    And choose a time slot randomly from the available list  againafter few seconds
    And click on view appointments after some time again
    And click on logo
    And scroll to care progress
    And logout
