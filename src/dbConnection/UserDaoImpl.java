package dbConnection;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import entity.User;

public class UserDaoImpl extends JdbcDaoSupport implements UserDao{

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Autowired
	DataSource dataSource;
	
	@PostConstruct
	public void initialize() {
		setDataSource(dataSource);
	}
	
	@Override
	public void createUser(User user) {
		
		String sql = "INSERT INTO user " + 
				"(username, email, password, education) VALUES (?,?,?,?)";
		
		getJdbcTemplate().update(sql, new Object[] {user.getUsername(),user.getEmail(), user.getPassword(), user.getEducation()});
		
	}

	@Override
	public void deleteUser(User user) {
		
		String sql = "DELETE FROM user WHERE username=?";
		
		getJdbcTemplate().update(sql, new Object[] {user.getUsername()});
	}


}
