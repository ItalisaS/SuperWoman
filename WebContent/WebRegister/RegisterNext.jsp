<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Registered</title>
</head>
<body>
	<jsp:useBean id="user" class="user.UserBean" scope="request"/>
	<jsp:setProperty property="username" name="user" value="${param.username }"/>
	<jsp:setProperty property="email" name="user" value="${param.email }"/>
	<jsp:setProperty property="password" name="user" value="${param.password }"/>
	<jsp:setProperty property="education" name="user" value="${param.education }"/>
	
</body>
</html>