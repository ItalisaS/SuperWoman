package featureTest;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import static org.junit.Assert.*;

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
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("file:///C:/Users/Lea/git/SuperWoman/src/website/signUp.html");
	}


	@When("^Visitor provides username <username>, email <email>, password <password>$")
	public void Visitor_provides_username_username_email_email_password_password() throws Throwable
	{
		driver.findElement(By.id("Name")).sendKeys("Name");
		driver.findElement(By.id("Email")).sendKeys("Email");
		driver.findElement(By.id("Password")).sendKeys("Password");

		assertTrue(checkInput());
	}


	private Boolean checkInput()
	{

		if (!(driver.findElement(By.id("Name")).getAttribute("value").equals("")))
		{
			if (!(driver.findElement(By.id("Email")).getAttribute("value").equals("")))
			{
				if (!(driver.findElement(By.id("Password")).getAttribute("value").equals("")))
				{
					return true;
				}
			}
		}
		return false;
	}


	@When("^Chooses education level$")
	public void Chooses_education_level() throws Throwable
	{
		if (driver.findElement(By.id("Education")).getText() != null
				|| !(driver.findElement(By.id("Education")).getText().equals("")))
		{
			System.out.println("Education Level is choose");
		}
	}


	@Then("^Visitor created an account$")
	public void Visitor_created_an_account() throws Throwable
	{
		driver.findElement(By.id("Save")).click();
	}


	@Then("^Visitor should be shown a success message$")
	public void Visitor_should_be_shown_a_success_message() throws Throwable
	{
		String url = driver.getCurrentUrl();
		assertEquals("file:///C:/Users/Lea/git/SuperWoman/src/website/accountCreated.html", url);
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
		driver.findElement(By.id("Save")).click();
	}
	
	
	@Then("^Visitor should not be shown the next page$")
	public void Visitor_should_not_be_shown_the_next_page() throws Throwable {
		String url = driver.getCurrentUrl();
		assertEquals("file:///C:/Users/Lea/git/SuperWoman/src/website/signUp.html", url);
	}


	@Then("^Visitor should be shown an error message$")
	public void Visitor_should_be_shown_an_error_message() throws Throwable
	{
		String url = driver.getCurrentUrl();
		assertEquals("file:///C:/Users/Lea/git/SuperWoman/src/website/accountCreatedFail.html", url);
	}


	@When("^Visitor did not fill in all required elements$")
	public void Visitor_did_not_fill_in_all_required_elements() throws Throwable
	{
		driver.findElement(By.id("Name")).sendKeys("");
		driver.findElement(By.id("Email")).sendKeys("");
		driver.findElement(By.id("Password")).sendKeys("");
		
		assertFalse(checkInput());
	}
}
