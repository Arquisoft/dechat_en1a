Feature: See the chat
  A user should be able to see the chat and chat messages

Scenario: A user want to see his/her chats
	Given I logged
	When I click on my chats
	Then I should be able to see my chats