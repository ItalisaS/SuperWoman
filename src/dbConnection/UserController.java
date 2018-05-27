package dbConnection;

@Controller
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public void saveUser(@RequestBody User user) {
		userService.save(user);
	}

	@RequestMapping("/delete", method=RequestMethod.POST)
	public void delete(@RequestBody User user) {
		userService.delete(user);
	}
}
