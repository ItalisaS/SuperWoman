Feature: DeleteAccount
	As a user
	I want to be able to delete my account and 
	delete my data record permanently from the database.
	
	Scenario: DeleteAccount successful
		Given User is on MyProfile page
		When User presses 'Delete Account'- Button
		Then User should be shown a confirmation dialog
		When User confirms  his choice
		Then User should be forwarded to the welcome page

		
		
		
		