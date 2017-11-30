package featureTest;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class SignUp_StepDefinition
{
	private static WebDriver driver = null;
	@Before
	public void setup()
	{
		System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@After
	public void clean()
	{
		driver.close();
	}
	
	@Given("^Visitor is on SignUp page$")
	public void Visitor_is_on_SignUp_page() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@When("^Visitor provides username <username>, email <email>, password <password>$")
	public void Visitor_provides_username_username_email_email_password_password() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@When("^Chooses education level$")
	public void Chooses_education_level() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@Then("^Visitor created an account$")
	public void Visitor_created_an_account() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@Then("^Visitor should be shown a success message$")
	public void Visitor_should_be_shown_a_success_message() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@When("^Account with the given email or username already exists$")
	public void Account_with_the_given_email_or_username_already_exists() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@Then("^Visitor did not create an account$")
	public void Visitor_did_not_create_an_account() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@Then("^Visitor should be shown an error message$")
	public void Visitor_should_be_shown_an_error_message() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}


	@When("^Visitor did not fill in all required elements$")
	public void Visitor_did_not_fill_in_all_required_elements() throws Throwable
	{
		// Express the Regexp above with the code you wish you had
		throw new PendingException();
	}
}
