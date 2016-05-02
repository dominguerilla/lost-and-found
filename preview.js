// JavaScript Document

function previewpop() {
	var text = document.genEmail.bodyField.value;
	text = text.replace(/\n\r?/g, '<br />');

	popup = window.open("","","resizable,scrollbars,height=700, width=700");
	popup.document.write('<html><head><title>Preview</title>');
	popup.document.write('<link href="style.css" rel="stylesheet" type="text/css" /></head><body>');
	popup.document.write('<p>Please make sure that everything is correct.  To make any corrections, just close this window and edit the fields in the original page, then hit "Preview" again.</p><a href="#" onClick="javascript:  window.close()">Close Window</a><hr />');
	popup.document.write('<b>From:</b>'+document.genEmail.fromField.value+"<br />");
	popup.document.write('<b>To:</b>'+document.genEmail.toField.value+"<br />");
	popup.document.write('<b>Cc:</b>'+document.genEmail.ccField.value+"<br />");
	popup.document.write('<b>Subject:</b>'+document.genEmail.subjectField.value+"<br />");
	popup.document.write('<b>Message:</b><br />'+text+"<br />");
	popup.document.write('</body></html>');
	popup.focus()
}