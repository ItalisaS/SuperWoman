<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="../Website/css/style.css" rel="stylesheet">
<title>SignUp</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js"></script>
</head>
<body>
<body>
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
	<form action="../Website/accountCreated.html" method="post">
		<img src="../img/ProfilePicture.PNG" align="right" height="200"
			width="200">
		<h1>Create New Account</h1>
		<label><b>Name:</b></label><br> <input id="Name" type="text"
			name="name"><br> <br> <label><b>Email:</b></label><br>
		<input id="Email" type="text" name="email"><br> <br>
		<label><b>Password:</b></label><br> <input id="Password"
			type="password" name="psw"><br> <br> <label><b>Education
				Level:</b></label> <br> <select id="Education" name="education" size="1">
			<option>Elementary School</option>
			<option>Secondary School</option>
		</select><br> <br>
		<button type="reset">Cancel</button>
		<button id="Save" type="submit">Save Settings</button>
	</form>
	<script src="../Website/allUsersCtrl.js"></script>
</body>
</html>