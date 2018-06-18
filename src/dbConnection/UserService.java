package dbConnection;

import entity.User;

public interface UserService {

	void delete(User user);
	
	void save(User user);
}
