<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Log in</title>
</head>
<body>
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
			<li><a href="newLogin.jsp">LogIn</a></li>
			<li><a href="../Website/signUp.html">SignUp</a></li>
		</ul>
	</div>
	</nav>
	<c:url value="/loginNew" var="loginUrl" />

	<form action="${loginUrl}" method="post">

		<h2>Sign In</h2>
		<%-- <c:if test="${param.error != null}">
			<p>Invalid username and password.</p>
		</c:if>
		<c:if test="${param.logout != null}">
			<p>You have been logged out.</p>
		</c:if> --%>
		<p>
			<label for="username">Name</label> <br> <input type="text" id="username"
				name="username" />
		</p>
		<p>
			<label for="password">Password</label> <br> <input type="password"
				id="password" name="password" />
		</p>
		<input type="hidden" name="${_csrf.parameterName}"
			value="${_csrf.token}" /> 
			<a href="">Forgot Password?</a>
		<br>
		<button type="submit" class="btn">Log in</button>
	</form>

</body>
</html>