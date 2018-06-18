package repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import entity.User;

public interface UserRepository {
	
	List<User> findByUsername(String username);

}
