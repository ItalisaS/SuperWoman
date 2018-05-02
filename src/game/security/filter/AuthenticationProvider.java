package game.security.filter;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;

public class AuthenticationProvider extends AbstractUserDetailsAuthenticationProvider{

	
	private UserDetails userDetails;

	@Override
	protected void additionalAuthenticationChecks(UserDetails userDetails,
			UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		this.userDetails = userDetails;
	}

	@Override
	protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException {
//		new UsernamePasswordAuthenticationToken(userDetails.getPassword(), userDetails.getUsername());
		// TODO Auto-generated method stub
		System.out.println("GGGGGGGGGGGGGGGGGGGG");
		return new UserDetail();
	}

}
