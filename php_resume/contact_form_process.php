<?php  header(“Cache-Control:no-cache”);   ?>

<!doctype html>
<html lang = "en">

<head>
	<meta charset="utf-8">     
	<title>PHP Script for Contact Form</title> 
</head>

<body>
	<?php
		$name = $_POST['txtName'];
		$phone = $_POST['txtPhone'];
		$mobile = $_POST['txtMobile'];
		$email = $_POST['txtEmail'];
		$message = $_POST['txtMessage'];

		echo "Thanks for leaving your contact $name!";
	?>
</body>

</html>