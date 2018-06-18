package dbConnection;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import entity.User;

@Controller
//@RequestMapping(value="/register")
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value="/Registration.jsp", method=RequestMethod.POST)
	public String saveUser(User user) {
		userService.save(user);
		return "saved";
	}

//	@RequestMapping(value="/delete", method=RequestMethod.POST)
//	public void delete(@RequestBody User user) {
//		userService.delete(user);
//	}
}
