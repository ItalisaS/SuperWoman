package dbConnection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserDaoImpl implements UserDao{

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	private DataSource dataSource;
	
	public void setDataSource(DataSource dataSource) {
		this.dataSource=dataSource;
	}
	
	@Override
	public void createUser(User user) {
		
		jdbcTemplate = new JdbcTemplate(dataSource);
		
		String sql = "INSERT INTO USER " + 
				"(username, email, password, education) VALUES (?,?,?,?)";
		
		jdbcTemplate.update(sql, new Object[] {user.getUsername(),user.getEmail(), user.getPassword(), user.getEducation()});
		
	}

	@Override
	public void deleteUser(User user) {
		
		jdbcTemplate = new JdbcTemplate(dataSource);
		
		String sql = "DELETE FROM user WHERE username=?";
		
		jdbcTemplate.update(sql, new Object[] {user.getUsername()});
	}


}
