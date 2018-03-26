<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact Form</title>
</head>

<body>
	<?php
	$link = mysqli_connect("localhost:8080", "root", "", "resumehelen");
		if(!$link)
		{
			exit ("Connection Error: ".mysqli_connect_error());
			}
		echo "Connection to database successful <br/>";
    ?>
	
</body>
</html>