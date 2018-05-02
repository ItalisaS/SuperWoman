<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"
    import="org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<link href="../Website/css/style.css" rel="stylesheet">
<title>Login</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
</head>


<body onload="document.getElementById('username').focus();">
	<div class="header">
		<h1>
			<a href="../Website/index.html" id="StartPage">SuperWoman</a>
		</h1>
	</div>
	<nav>
		<div class="container">
			<ul>
				<li><a href="../Website/aboutUs.html">About Us</a></li>
				<li>
					<div class="dropdown">
						<a href="../Website/categoryLevels.html"> Play Game </a>
						<ul class="dropdown-items">
							<li><a href="../Website/levelsMath.html">Math</a></li>
							<li><a href="../Website/levelsHistory.html">History</a></li>
							<li><a href="../Website/levelsItems.html">WordHunting</a></li>
						</ul>
					</div>
				</li>
				<li><a href="login.jsp">LogIn</a></li>
				<li><a href="signUp.jsp">SignUp</a></li>
			</ul>
		</div>
	</nav>
	<form name="f" method="post" action="/login">
		<h2>	Sign In</h2>
		<label>User Name:</label><br> <input id="username" type="text" name="<%=UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY%>" placeholder="Enter Username"><br> <label>Password:</label><br>
		<input type="password" name="<%=UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_PASSWORD_KEY%>" placeholder="Enter Password"><br>
		<button>SIGN IN</button>
		</br> <a href="">Forgot Password?</a>
		<h2>New User</h2>
		<button name="submit" type="submit">SIGN UP</button>
	</form>
	</br>
</html>