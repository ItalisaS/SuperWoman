package game.security.filter;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.core.CollectionFactory;
import org.springframework.security.config.core.GrantedAuthorityDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserDetail implements UserDetails {

	private static final long serialVersionUID = -2242558410674763626L;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> collection = new ArrayList<GrantedAuthority>();
		System.out.println("blub");
		// Collection<? extends GrantedAuthority> collection = new Collection<?
		// extends GrantedAuthority>();
		GrantedAuthority role = new GrantedAuthority() {

			private static final long serialVersionUID = 3907617920209135884L;

			@Override
			public String getAuthority() {
				return "ROLE_USER";
			}
		};
		collection.add(role);
		return collection;
		// return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		System.out.println("blub");
		return "test";
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		System.out.println("blub");
		return "user1";
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		System.out.println("blub");
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		System.out.println("blub");
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		System.out.println("blub");
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		System.out.println("blub");
		return true;
	}

}
