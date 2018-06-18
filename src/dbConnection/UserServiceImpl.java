package dbConnection;

import org.springframework.beans.factory.annotation.Autowired;

import entity.User;
import repository.UserRepository;

public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserDao userDao;
	
	@Override
	public void delete(User user) {
//		userRepository.delete(user);
	}

	@Override
	public void save(User user) {
		userDao.createUser(user);
	}

}
