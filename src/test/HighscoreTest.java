package test;

import org.junit.Test;
import static org.junit.Assert.*;

import entity.Highscore;
import entity.User;

public class HighscoreTest {
	
	@Test
	public void testCreateHighscore(){
		User user = new User("username", "email", "password", "education");
		Highscore highscore = new Highscore(user, 5, 1);
		assertEquals(5,highscore.getScore());
		assertEquals(1,highscore.getLevel());
		assertEquals("username", highscore.getUser().getUsername());
	}
	
	@Test
	public void testSetScore(){
		User user = new User("username", "email", "password", "education");
		Highscore highscore = new Highscore(user, 5, 1);
		highscore.setScore(10);
		assertEquals(10,highscore.getScore());
	}
	
	@Test
	public void testSetLevel(){
		User user = new User("username", "email", "password", "education");
		Highscore highscore = new Highscore(user, 5, 1);
		highscore.setLevel(2);
		assertEquals(2,highscore.getLevel());
	}
	
	@Test
	public void testSetUser(){
		User user = new User("username", "email", "password", "education");
		Highscore highscore = new Highscore(user, 5, 1);
		User newuser = new User("newusername", "newemail", "newpassword", "neweducation");
		highscore.setUser(newuser);
		assertEquals("newusername", highscore.getUser().getUsername());
	}
	

}
