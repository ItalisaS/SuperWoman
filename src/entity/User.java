package entity;

public class User {

	private Long id;
	private String username;
	private String email;
	private String password;
	private String education;

	public User() {
		// default constructor
	}

	public User(String username, String email, String password, String education) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.education = education;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
	}

	@Override
	public String toString() {
		return username + email + password + education;
	}

}
