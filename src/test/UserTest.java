package test;

import org.junit.Test;
import static org.junit.Assert.*;

import entity.User;

public class UserTest {

	@Test
	public void testCreateUser() {
		User user = new User("username", "email@.de", "password", "education");
		assertEquals("username", user.getUsername());
		assertEquals("email@.de", user.getEmail());
		assertEquals("password", user.getPassword());
		assertEquals("education", user.getEducation());
	}
	
	
	@Test
	public void testSetName() {
		User user = new User("username", "email@.de", "password", "education");
		user.setUsername("new username");
		assertEquals("new username", user.getUsername());
	}
	
	
	@Test
	public void testSetPassword() {
		User user = new User("username", "email@.de", "password", "education");
		user.setPassword("newPassword");
		assertEquals("newPassword", user.getPassword());
	}
	
	@Test
	public void testSetEmail() {
		User user = new User("username", "email@.de", "password", "education");
		user.setEmail("newemail@.de");
		assertEquals("newemail@.de", user.getEmail());
	}
	
	@Test
	public void testSetEducation() {
		User user = new User("username", "email@.de", "password", "education");
		user.setEducation("neweducation");
		assertEquals("neweducation", user.getEducation());
	}
}
