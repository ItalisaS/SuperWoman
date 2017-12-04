package featureTest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChooseLevel_StepDefinition
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

	@Given("^User is on ChooseLevel page$")
	public void User_is_on_ChooseLevel_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("file:///C:/Users/Lea/git/SuperWoman/src/website/categoryLevels.html");
	}

	@When("^User clicks on a category$")
	public void User_clicks_on_a_category() throws Throwable {
		driver.findElement(By.id("Item")).click();
	}

	@When("^Chooses a level which is unlocked$")
	public void Chooses_a_level_which_is_unlocked() throws Throwable {
	    driver.findElement(By.id("Level")).click();
	}

	@Then("^The level opens$")
	public void The_level_opens() throws Throwable {
		String url = driver.getCurrentUrl();
		if(url.equals("file:///C:/Users/Lea/git/SuperWoman/WebContent/WEB-INF/playGame.html")){
			System.out.println("Load Level");;
		}
		else {
			System.out.println("Couldn't Start Level");
		}
	}

	@Then("^User can play the level$")
	public void User_can_play_the_level() throws Throwable {
		driver.findElement(By.id("Play")).click();
		String url = driver.getCurrentUrl();
		if(url.equals("file:///C:/Users/Lea/git/SuperWoman/WebContent/WEB-INF/Test.html")){
			System.out.println("Load Level");;
		}
		else {
			System.out.println("Couldn't Start Level");
		}
	}

	@When("^User chooses a level which is locked$")
	public void User_chooses_a_level_which_is_locked() throws Throwable {
		driver.findElement(By.id("Item")).click();
		driver.findElement(By.id("Lock")).click();
	}

	@Then("^User get shown an error message$")
	public void User_get_shown_an_error_message() throws Throwable {
		String url = driver.getCurrentUrl();
		if(url.equals("file:///C:/Users/Lea/git/SuperWoman/src/website/couldntLoadLevel.html")){
			System.out.println("Locked Level couldn't load");
		}
		else {
			System.out.println("Locked Level load");
		}
	}

	@Then("^Should choose a new level$")
	public void Should_choose_a_new_level() throws Throwable {
		String url = driver.getCurrentUrl();
		if(url.equals("file:///C:/Users/Lea/git/SuperWoman/src/website/categoryLevels.html")){
			System.out.println("User can choose new Level");
		}
		else {
			System.out.println("User can not choose new Level");
		}
	}
}
