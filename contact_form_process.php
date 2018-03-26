<?php header("Cache-Control:no-cache"); ?>

<!doctype html>
<html lang = "en">

<head>
	<meta charset="utf-8">     
	<title>PHP Script for Contact Form</title> 
</head>

<body>
	<?php
		//open connection to server and database
		require_once 'contact_form.inc.php';

		//read form data
		$name = mysqli_real_escape_string($link, $_POST['txtName']);
		$phone = mysqli_real_escape_string($link, $_POST['txtPhone']);
		$mobile = mysqli_real_escape_string($link, $_POST['txtMobile']);
		$email = mysqli_real_escape_string($link, $_POST['txtEmail']);
		$message = mysqli_real_escape_string($link, $_POST['txtMessage']);

		//set up query
		$query = "insert into tblcontactlist(contactName, contactPhone, contactMobile, contactEmail, contactMessage) values('$name', '$phone', '$mobile', '$email', '$message')";

		//execute query
		$result = mysqli_query($link,$query);

	    if(!$result)
	    {
			echo "Query error: ". mysqli_error($link);
			mysqli_close($link);
			exit();
	    }

		//get the ID of the record from the last insert query
		$ID = mysqli_insert_id($link);	
		
		//display confirmation message and the ID of the record and disconnect from server 
		mysqli_close($link);
		echo "Thanks for leaving your contact $name!";
		exit("$name successfully inserted with an ID of $ID");
	?>
</body>

</html>