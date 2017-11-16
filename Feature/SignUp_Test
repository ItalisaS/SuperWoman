Feature: SignUp
	As a visitor
	I want to create a new account with my name, emailaddress, a password and
	an education level  
	
	Scenario: SignUp successful
		Given Visitor is on SignUp page
		When Visitor provides username <username>, email <email>, password <password>
		And Chooses education level
		Then Visitor created an account
		And Visitor should be shown a success message
	
	Scenario: SignUp failed (incorrect input)
		Given Visitor is on SignUp page
		When Visitor provides username <username>, email <email>, password <password>
		And Chooses education level
		And Account with the given email or username already exists
		Then Visitor did not create an account
		And Visitor should be shown an error message
		
	Scenario: SignUp failed (missing input)
		Given Visitor is on SignUp page
		When Visitor did not fill in all required elements
		Then Visitor did not create an account
		And Visitor should be shown an error message
		
		
		
		