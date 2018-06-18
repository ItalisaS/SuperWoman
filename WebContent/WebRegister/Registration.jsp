<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="./Website/style.css" rel="stylesheet">
<title>Registration</title>
</head>
<body>
	<jsp:useBean id="user" class="user.UserBean"/>
<%-- 	<jsp:useBean id="saveUser" class="dbConnection.UserController" scope="request"/> --%>
	<div class="header">
		<h1>
			<a href="index.html" id="StartPage">SuperWoman</a>
		</h1>
	</div>
	<nav>
		<div class="container">
			<ul>
				<li><a href="aboutUs.html">About Us</a></li>
				<li>
					<div class="dropdown">
						<a href="categoryLevels.html"> Play Game </a>
						<ul class="dropdown-items">
							<li><a href="levelsMath.html">Math</a></li>
							<li><a href="levelsHistory.html">History</a></li>
							<li><a href="levelsItems.html">WordHunting</a></li>
						</ul>
					</div>
				</li>
				<li><a href="signInPage.html">LogIn</a></li>
				<li><a href="signUp.html">SignUp</a></li>
			</ul>
		</div>
	</nav>
	<form action="accountCreated.html" method="post">
		<img src="../img/ProfilePicture.PNG" align="right" height="200"
			width="200">
		<h1>Create New Account</h1>
		<label><b>Name:</b></label><br> 
		<input id="username" type="text" name="username">
<%-- 		<jsp:setProperty name="username" property="username"/> --%>
		<br> <br> 
		<label><b>Email:</b></label><br>
		<input id="email" type="text" name="email">
<%-- 		<jsp:setProperty name="email" property="email"/> --%>
		<br> <br> 
		<label><b>Password:</b></label><br>
		<input id="password" type="password" name="password">
<%-- 		<jsp:setProperty name="password" property="password"/> --%>
		<br><br> 
		<label><b>Education Level:</b></label> <br> 
		<select id="education" name="education" size="1">
			<option>Elementary School</option>
			<option>Secondary School</option>
		</select>
<%-- 		<jsp:setProperty name="education" property="education"/><br> <br> --%>
		<button type="reset">Cancel</button>
		<button id="Save" type="submit" name="saveUser">Save Settings</button>
	</form>
	<script src="allUsersCtrl.js"></script>
	</div>
<%--  	<jsp:setProperty property="username" name="user" value="username"/>  --%>
<%-- 	<jsp:setProperty property="email" name="user" value="email"/> --%>
<%-- 	<jsp:setProperty property="password" name="user" value="password"/> --%>
<%-- 	<jsp:setProperty property="education" name="user" value="education"/> --%>
</body>
</html>