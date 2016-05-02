<html>
	<head>
		<title>E-mail Generator</title>
		<link rel="stylesheet" type="text/css" href="style.css" media="screen" />

	</head>
	<body>
		<h3><?php
				$to = $_POST["toField"];
				$subject = $_POST["subjectField"];
				$message = $_POST["bodyField"];

				$headers = 'From: ' . $_POST["fromField"] . "\r\n";
				$headers .= 'Cc: ' . $_POST["ccField"] . "\r\n";
				$headers .= 'Bcc: ' . $_POST["bccField"] . "\r\n";

				if(mail($to,$subject,$message,$headers)) {
					echo "The following e-mail was succesfully sent to $to.";
				} 
				else {
				echo "There was a problem sending the mail. Check all fields and make sure everything is valid.";
				}
			?>
		</h3>
		<hr />
	<b>From:</b> <?php echo $_POST["fromField"]; ?><br />
	<b>To:</b> <?php echo $_POST["toField"]; ?><br />
	<b>CC:</b> <?php 	echo $_POST["ccField"];?><br />
	<b>Subject:</b> <?php 	echo $_POST["subjectField"];?><br />
	<b>Message:</b><br /> <?php 	echo nl2br($_POST["bodyField"]);?><br />
	

	

	
	</body>
</html>