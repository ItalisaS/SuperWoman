package dbConnection;

import entity.User;

public interface UserDao {

	public void createUser(User user);
	
	public void deleteUser(User user);
}
