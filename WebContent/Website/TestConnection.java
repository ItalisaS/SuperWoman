package dbConnection;

import org.springframework.beans.factory.annotation.Autowired;

import entity.User;

public class TestConnection {
	
	@Autowired
	UserController userController;

	public void main() {
		// TODO Auto-generated method stub

		User testUser = new User("testUser","testUser@email.de","password","xxx");
		userController.saveUser(testUser);
	}

}
