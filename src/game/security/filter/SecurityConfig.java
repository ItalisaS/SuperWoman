package game.security.filter;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/Website/css/**", "/Level/**", "/Website/img/**", "/JavaScript/**",
						"/Webapp/newLogin.jsp", "/Website/index.html", "/Website/allUsersCtrl.js",
						"/Website/signUp.html", "/Website/aboutUs.html", "/login/**", "WEB-INF/lib/jstl-1.2.jar")
				.permitAll().anyRequest().authenticated().and().formLogin().loginPage("/Webapp/newLogin.jsp");
		http.logout().logoutSuccessUrl("/newLogin.jsp?logout").permitAll();
//		logout()
//				// .logoutUrl("/Website/logout")
//				.logoutSuccessUrl("/Website/index.html").permitAll();
	}

}
