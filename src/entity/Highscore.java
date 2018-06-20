package entity;

public class Highscore {

	private User user;
	private int score;
	private int level;

	public Highscore(User user, int score, int level) {
		this.user = user;
		this.score = score;
		this.level = level;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

}
