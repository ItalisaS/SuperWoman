package user;

import org.springframework.beans.factory.annotation.Autowired;

import dbConnection.UserController;
import entity.User;

public class UserBean {
	
	@Autowired
	UserController userController;

	private String username;

	private String email;

	private String password;

	private String education;
	
	public UserBean() {}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
		createUser();
	}
	
	public void createUser() {
		User user = new User();
		user.setUsername(username);
		user.setEmail(email);
		user.setPassword(password);
		user.setEducation(education);
		
		userController.saveUser(user);
	}
}
