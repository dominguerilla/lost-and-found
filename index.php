<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Lost and Found E-mail Generator</title>
<link rel="stylesheet" type="text/css" href="style2.css" />
<link href="images/favicon.ico" rel="icon" type="image/x-icon" />

<script src="acquire_name.js" type="text/javascript"></script>
<script src="genEmail.js" type="text/javascript"></script>
<script src="preview.js" type="text/javascript"></script>
<script type="text/javascript">

function refreshFields (form)  {

form.consultantId.value = ""
form.consultantName.value = ""
form.patronId.value = ""
form.patronName.value = ""
form.patronAcctClass[0].checked = false
form.patronAcctClass[1].checked = false
form.patronAcctClass[2].checked = false
form.patronAcctClass[3].checked = false
form.location.selectedIndex = 4
form.timeYear.selectedIndex = 4
form.choice[0].checked = false
form.choice[1].checked = false
form.choice[2].checked = false
form.choice[3].checked = false
form.choice[4].checked = false
form.choice[5].checked = false
form.choice[6].checked = false
form.choice[7].checked = false
form.choice[8].checked = false
form.choice[9].checked = false
form.choice[10].checked = false
form.toField.value = ""
form.ccField.value = ""
form.subjectField.value = ""
form.bodyField.value = ""

}
</script>
</head>

<body>
<div id="page">
	<div id="content">

<!-- Adrian Kabigting's Code with contributions from Andrew Blackburn and Kaitlyn Herthel-->

Welcome to the Busch Consultant Lost and Found E-mail Generator!<br />Few things to get you started:<br />Since we know who our consultants are, once you fill in the Consultant NetID, your name should show up.  If it doesn't, then just fill it in yourself.  You can let a supervisor know so we can add you in to the script.  Patron names and netIDs have to be put in manually since we do not have access to the database that holds all of Rutgers' NetIDs.  For your convenience, there is a link below that links to LDAP in a new window, as well as for webmail.  Feel free to edit any part of the generated fields if any corrections are needed.  Once the e-mail is sent, the patron, you, and loree_lab will receive a copy of the e-mail.  MAKE SURE TO VERIFY ALL GENERATED FIELDS AND PREVIEW BEFORE SENDING.<br /><br />
<a href="http://search.rutgers.edu" target="_blank">NetID Lookup</a> <br />
<a href="http://mail.scarletmail.rutgers.edu" target="_blank">ScarletMail</a>

<br />

<form target="newWin" align="left" action="contact.php" name="genEmail" method="post">
<table border="0">

	<tr>
		<td><b>Consultant NetID:</b></td>
		<td><input type="text" name="consultantId" onKeyUp="acquireName(this.form)"/></td>
	</tr>

	<tr>
		<td><b>Consultant Name:</b></td>
		<td><input type="text" name="consultantName" /></td>
	</tr>

	<tr>
		<td><b>Patron NetID:</b></td>
		<td><input type="text" name="patronId" /></td>
	</tr>

	<tr>
		<td><b>Patron Name:	</b></td>
		<td><input type="text" name="patronName" /></td>
	</tr>

	<tr>
		<td align="center" colspan="2"><b>Patron Account Type:</b>		
			<br />
			<input type="radio" name="patronAcctClass" value="eden." />Eden
			<input type="radio" name="patronAcctClass" value="rci." />RCI			
			<input type="radio" name="patronAcctClass" value="scarletmail." />Scarletmail
			<input type="radio" name="patronAcctClass" value="" />@rutgers
			<input type="radio" name="patronAcctClass" value="" />Other
		</td>
	</tr>

	<tr>
		<td align="center" colspan="2"><b>Site:</b><br />
			<select name="location" defaultvalue="4">
				<option>Loree Computer Lab (Loree)</option>
				<option>Cook Campus Computing Center (C4)</option>
				<option>Douglass Campus Computing Center (Dcent)</option>
				<option selected>Please select a site</option>
			</select>
			<br />
			<br />
			<b>Type of Hours:</b>
			<br />
			<select name="timeYear">
				<option>Regular Semester Hours</option>
				<option>Summer Break Hours</option>
				<option>Winter Break Hours</option>
				<option>Spring Break Hours</option>
				<option>Overnight Hours</option>
				<option selected>Please select the type of hours</option>
			</select>
		</td>
	</tr>
	
	<tr>
		<td colspan="2" align="center"><b>Check all that apply:</b>
			<table>
				<tr>
					<td><input type="checkbox" name="choice" value="Flash Drive">Flash Drive</td>
					<td><input type="checkbox" name="choice" value="RU Connection Card">RU Connection Card</td>
					<td><input type="checkbox" name="choice" value="Wallet">Wallet</td>
				</tr>
				<tr>
					<td><input type="checkbox" name="choice" value="Bag/Purse">Bag/Purse</td>
					<td colspan="2"><input type="checkbox" name="choice" value="Driver's License/State ID">Driver's License/State ID</td>
				</tr>
				<tr>
					<td><input type="checkbox" name="choice" value="Cellphone">Cellphone</td>
					<td><input type="checkbox" name="choice" value="Music player (e.g. iPod, Zune)">Music player</td>
					<td><input type="checkbox" name="choice" value="CD">CD</td>
				</tr>
				<tr>
					<td><input type="checkbox" name="choice" value="Textbook/Notebook">Textbook/Notebook</td>
					<td><input type="checkbox" name="choice" value="Laptop">Laptop</td>
					<td><input type="checkbox" name="choice" value="">Other</table></td></td>
				</tr>
				<tr>
					<td align="center" colspan="2">
						<input type="button" name="submit" value="Generate E-mail" onClick="leFunction(this.form)"/>
						<input type="button" name="refresh" value="Refresh Fields" onClick="refreshFields(this.form)" />
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>

<table>
	<tr>
		<td><b><a onClick="javascript:  document.genEmail.fromField.value=prompt('Edit From')">F</a>rom:</b></td><td>		<input type="text" name="fromField" size="70"  readonly="readonly"/><input type="hidden" name="bccField" id="bccField" /></td>
	</tr>
	<tr>
		<td><b>To:</b></td><td>		<input type="text" name="toField" size="70"  /></td>
	</tr>
	<tr>
		<td><b><a onClick="javascript: document.genEmail.ccField.value=prompt('Edit CC')">C</a>C:</b></td><td>		<input type="text" name="ccField" size="70" readonly="readonly"/></td>
	</tr>
	<tr>
		<td><b>Subject:</b></td><td>	<input type="text" name="subjectField" size="70" /></td>
	</tr>
	<tr>
		<td colspan="2"><b>Message:</b><br />
			<textarea cols="65" rows="25" name="bodyField" id="bodyField"></textarea><br />
			<input type="button" value="Preview" onClick="previewpop()" /><input type="submit" value="Send"/>
		
		</td>
	</tr>
</table>



</form>

<a href="editor.php" target="_blank" class="hidden">Click here to edit netID listing easily</a>

</div>
<!-- end #content -->

</div>
<!-- end #page -->

</body>
</html>  