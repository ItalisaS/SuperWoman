package dbConnection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public void saveUser(@RequestBody User user) {
		userService.save(user);
	}

	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public void delete(@RequestBody User user) {
		userService.delete(user);
	}
}
