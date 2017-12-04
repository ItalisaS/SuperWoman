package featureTest;


import java.util.concurrent.TimeUnit;

import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.sun.source.tree.AssertTree;

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
		
		if (checkInput())
		{
			System.out.println("Input Data correct");
		} else
		{
			System.out.println("Input Data False");
		}
	}


	private Boolean checkInput()
	{

		if (driver.findElement(By.id("Name")).getText() != null
				|| !(driver.findElement(By.id("Name")).getText().equals("")))
		{
			System.out.println(driver.findElement(By.id("Name")).getText());
			if (driver.findElement(By.id("Email")).getText() != null
					|| !(driver.findElement(By.id("Email")).getText().equals("")))
			{
				if (driver.findElement(By.id("Password")).getText() != null
						|| !(driver.findElement(By.id("Password")).getText().equals("")))
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
		if (url.equals("file:///C:/Users/Lea/git/SuperWoman/src/website/accountCreated.html"))
		{
			System.out.println("Account created successful");	
		} else
		{
			System.out.println("Couldn't create the Account");
		}
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


	@Then("^Visitor should be shown an error message$")
	public void Visitor_should_be_shown_an_error_message() throws Throwable
	{
		String url = driver.getCurrentUrl();
		if (url.equals("file:///C:/Users/Lea/git/SuperWoman/src/website/accountCreatedFail.html"))
		{
			System.out.println("Account created fail");	
		} else
		{
			System.out.println("Create false Account");
		}
	}


	@When("^Visitor did not fill in all required elements$")
	public void Visitor_did_not_fill_in_all_required_elements() throws Throwable
	{
		driver.findElement(By.id("Name")).sendKeys("");
		driver.findElement(By.id("Email")).sendKeys("");
		driver.findElement(By.id("Password")).sendKeys("");

		if (checkInput())
		{
			System.out.println("Input Data correct");
		} else
		{
			System.out.println("Input Data False");
		}
	}
}
