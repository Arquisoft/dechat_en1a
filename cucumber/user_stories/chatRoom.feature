Feature: Send a message
  A user should be able to send a desired message

Scenario: A user want to see his/her chats
	Given I logged
	When I click on my chats
	Then I should be able to see my chats