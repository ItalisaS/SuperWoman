Feature: ChooseLevel
	As a user
	I want to choose a category and a level of the choosen category
	
	Scenario: ChooseLevel successful
		Given User is on ChooseLevel page
		When User clicks on a category
		And Chooses a level which is unlocked
		Then The level opens
		And User can play the level
	
	Scenario: ChooseLevel failed
		Given User is on ChooseLevel page
		When User chooses a level which is locked
		Then User get shown an error message
		And Should choose a new level