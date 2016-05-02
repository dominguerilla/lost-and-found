<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" language="javascript">
    function RunFile() {
    WshShell = new ActiveXObject("WScript.Shell");
    WshShell.Run("C:\Program Files (x86)\Rutgers University\Zed\Zed.exe", 1, false);
    }
</script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Lost and Found E-mail Generator</title>
<link rel="stylesheet" type="text/css" href="style.css" media="screen" />
<link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="images/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/images/faviconfavicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
<link rel="manifest" href="images/favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<script src="acquire_name.js" type="text/javascript"></script>
<script src="genEmail.js" type="text/javascript"></script>
<script src="preview.js" type="text/javascript"></script>
<script src="create_code.js" type="text/javascript"></script>
<script type="text/javascript">

function refreshFields (form)  {

form.consultantId.value = ""
form.consultantName.value = ""
form.bodyField.value = ""

}

function refreshSome (form)  {

form.consultantId.value = ""
form.consultantName.value = ""

}
</script>
</head>

<body>
<div id="header">
	<div id="logo">
		<h1><a href="index.php">Busch</a></h1>
		<p>Lost and Found Email Generator</p>

	</div>
	<!-- end #logo -->
	<div id="menu">
		<?php include("menu.php"); ?>
	</div>
	<!-- end #menu -->
</div>
<!-- end #header -->
<div id="page">
	<div id="content">

<!-- Adrian Kabigting's Code with contributions from Andrew Blackburn and Kaitlyn Herthel-->
		
<h1 align="left">Resource Page for Adding Supervisor NetIds</h1>

<br />

This is for generating new entries to the acquire_name.js file without having to do lots of work.<br />Enter a netID into the field below. If it does not automatically add a name beside it, fill one in yourself and click "Add to code below". You can enter as many consultants at a time as you want.<br />Once you have entered in all the netID's you need in the list, copy the code into the acquire_name.js file, found on the old Become account. If you don't know what this even means, ask someone whose been here a while.<br />

<a href="connect.rutgers.edu" target="_blank">Connect Email for Supervisors</a>

<br />

<form target="newWin" align="left" action="contact.php" name="genEmail" method="post">
<table border="0">

	<tr>
		<td><b>Consultant NetID:</b></td>
		<td><b>Consultant Name:</b></td>
	</tr>

	<tr>
		<td><input type="text" id="consultantId" name="consultantId" onKeyUp="acquireName(this.form)"/></td>
		<td><input type="text" id="consultantName" name="consultantName" /></td>
	</tr>

	<tr>
		<td><input align="center" type="button" value="Add to code below" name="submit" onClick="createCode(this.form)"/></td>
		<td><input align="center" type="button" value="Clear Upper Boxes" name="reset" onClick="refreshSome(this.form)"/></td>

	<tr>
		<td colspan="2"><b>Code to paste into acquire_name.js:</b><br />
			<textarea cols="65" rows="25" name="bodyField" id="bodyField"></textarea><br />
		
		</td>
	</tr>
</table>


</form>

	</div>
	<!-- end #content -->
	<div id="sidebar">
		<?php include("sidebar.php"); ?>
	</div>
	<!-- end #sidebar -->
</div>
<!-- end #page -->

<div id="footer">
	<?php include("footer.php"); ?>
</div>
<!-- end #footer -->
</body>
</html>  