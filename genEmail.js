//That's right!  I called it le FUNCTION!

function leFunction (form) {


/* Creating Array for Lost Items
 *
 * Due to the fact that there is an Other option for Lost Items
 * and that if no proper other item is entered, the other option
 * is automatically unchecked, this series of events needs to
 * occur before the rest of the validations, which includes
 * no items being selected 
 */

form.choice[5].value = "Cellphone";

var lostItems = "";                //generated string of compiled lost items outputted in the e-mail
var liC       = 0;     			   //variable to keep track of # of lost items
var oC        = true;              //variable to confirm if user wants to add an "other" item
var oCb       = new Array ();      //variable for building the other items array
var q         = -1;
var emptycellphoneDesc = true
var emptymusicplayerDesc = true

with (document.genEmail)  {

	for (var i=0; i<choice.length; i++)  {

		if (choice[10].checked  && oC)  {
			
			do  {
				q++
				oCb[q] = prompt("Please list the item not given in the checkboxes.","")
					if (oCb[q] == "" || oCb[q] == null)  {
						alert("You entered a blank item.");
						q--
					}
				choice[10].value = oCb.join("\n");
				liC = q
				oC = confirm ("Do you want to add another item?  Select OK for \"Yes\" and Cancel for \"No.\"");
				
			}
			while (oC)			

			if  (oCb != "")  {
			
			var otherIsValuable = confirm("Are any of the items you listed considered a valuable?  Select OK for \"Yes\" and Cancel for \"No.\"");
			
			}
			
			if (!oC & oCb == "") {
				choice[10].checked = false
			}


		}
		
		while  (emptycellphoneDesc == true && form.choice[5].checked && (cellphoneDesc == "" || cellphoneDesc == null))  {
			var cellphoneDesc = prompt("Please provide a description of the phone to the best of your ability.  (e.g. Black LG Versa)","");
			if  (cellphoneDesc == "" || cellphoneDesc == null)  {
				alert("You did not enter a description for the phone.  A default value will be used.");
				emptycellphoneDesc = false
			}
			else  {
				form.choice[5].value += "("+cellphoneDesc+")";
			}
		}

		while  (emptymusicplayerDesc == true && form.choice[6].checked && (musicplayerDesc == "" || musicplayerDesc == null))  {
			var musicplayerDesc = prompt("Please provide a description of the music player to the best of your ability.  (e.g. Black 4GB iPod)","");		
			if (musicplayerDesc == "" || musicplayerDesc == null)  {
				alert("You did not enter a description for the music player.  A default value will be used.");
				emptymusicplayerDesc = false;
			}
			else  {
				form.choice[6].value = "Music player ("+musicplayerDesc+")";
			}
		}
			
			
		
		if (choice[i].checked)  {
			liC++
			lostItems += choice[i].value +"\n";

		}
	}
}

//Forcing location of ARC if Overnight Hours (no longer a necessary code since Sups don't work overnights but I'm keeping it here in case things change)

if (form.timeYear.selectedIndex==4)  {
	form.location.selectedIndex=0
}

//Compiled validations

if  (form.consultantName.value.indexOf(" ") == -1 || form.consultantName.value.length == 0 || form.consultantId.value.length == 0 || form.patronName.value.length == 0  || form.patronId.value.length == 0 && !form.patronAcctClass[5].checked ||  form.location.selectedIndex == 4 || form.timeYear.selectedIndex == 5 || (!form.patronAcctClass[0].checked && !form.patronAcctClass[1].checked && !form.patronAcctClass[2].checked && !form.patronAcctClass[3].checked && !form.patronAcctClass[4].checked && !form.patronAcctClass[5].checked) || (!form.choice[0].checked && !form.choice[1].checked && !form.choice[2].checked && !form.choice[3].checked && !form.choice[4].checked && !form.choice[5].checked && !form.choice[6].checked && !form.choice[7].checked && !form.choice[8].checked && !form.choice[9].checked && !form.choice[10].checked))  {

	var errorList = new Array ()
	var j=-1

	if (form.consultantId.value.length == 0)  {
		j++
		errorList[j]="Consultant netID is blank."
	}
	
	if (form.consultantName.value.indexOf(" ") == -1)  {
		j++
		errorList[j]="Invalid consultant name.  Please enter a full name."
	}
	if (form.consultantName.value.length == 0)  {
		j++
		errorList[j]="Consultant name is blank."
	}
	if (form.patronId.value.length == 0 && !form.patronAcctClass[5].checked)  {
		j++
		errorList[j]="Patron netID is blank, or no alternate email address was given."
	}

	if (form.patronName.value.length == 0)  {
		j++
		errorList[j]="Patron name is blank."
	}
	if (!form.patronAcctClass[0].checked && !form.patronAcctClass[1].checked && !form.patronAcctClass[2].checked && !form.patronAcctClass[3].checked && !form.patronAcctClass[4].checked&& !form.patronAcctClass[5].checked  )  {
		j++
		errorList[j]="A patron account type was not selected."
	}
	if (form.location.selectedIndex == 4)  {
		j++
		errorList[j]="Please select a site."
	}
	if (form.timeYear.selectedIndex == 4)  {
		j++
		errorList[j]="Please select a time of year."
	}
	if (!form.choice[0].checked && !form.choice[1].checked && !form.choice[2].checked && !form.choice[3].checked && !form.choice[4].checked && !form.choice[5].checked && !form.choice[6].checked && !form.choice[7].checked && !form.choice[8].checked && !form.choice[9].checked && !form.choice[10].checked)  {
		j++
		errorList[j]="No lost items were selected."
	}


alert("Please correct any errors listed.");
form.toField.value=""
form.ccField.value=""
form.subjectField.value=""
form.bodyField.value = errorList.join("\n")


}

//Script if none of the validations are triggered

else  {

//Contact numbers

var arcPhone = "ARC at (848)932-9750"
var bestPhone    = "BEST at (848)445-1896 or at ARC at (848)932-9750"

/*  Contact phone-and-site matching.  The use of A sitePhone variable,
 *  which is linked to the location.selectedIndex,
 *  will allow for using the appropriate number in the email.
 *  All emails will include the ARC number anyway.
 */
var sitePhone

switch (form.location.selectedIndex)  {

case 0:
	sitePhone = arcPhone
	break;
case 1:
	sitePhone = bestPhone
	break;
default:
	sitePhone = arcPhone
	
}

//Parsing location
//0 = ARC 1 = BEST
var location;

switch (form.location.selectedIndex)  {

case 0:
	location = "ARC Computing Center";
	break;
case 1:
	location = "BEST Computing Center";
	break;
default:
	location = "ARC Computing Center";
}
	




//Grammar check (They were vs. It was)

if (liC == 1)  {

	gCheck  = "It was"
	gCheck1 = "it"
	gCheck2 = "item"
	gCheck3 = "has"
	gCheck4 = "is"
}

else  {

	gCheck  = "They were"
	gCheck1 = "them"
	gCheck2 = "items"
	gCheck3 = "have"
	gCheck4 = "are"
}

//Line Number
	var linenum 
	linenum = form.LineNum.value;

//Generating toField output domain name
var AcctClass
var dC = true
var domain = ""
var otherEmail

with (document.genEmail)  {

	for (var Count = 0; Count < patronAcctClass.length; Count++)  {
		

		if (patronAcctClass[Count].checked && Count == 4)  {

			do  {
			
				AcctClass = ""
				otherEmail = prompt("What is the patron's e-mail address? (e.g. example@domain.com)","");

				if  (otherEmail == ""  || otherEmail == null)  {

					dC = confirm("Do you want to enter an e-mail address?  Select OK for \"Yes\" and Cancel for \"No.\"");
				}
				else if (otherEmail.indexOf("@") == -1 || otherEmail.indexOf("@") == 0 || otherEmail.split("@")[1].length == 0 || otherEmail.indexOf(".") == -1 || otherEmail.split(".")[1].length == 0)  {
					
					alert("You have entered an invalid e-mail address.");
					dC = confirm("Do you want to enter an e-mail address?  Select OK for \"Yes\" and Cancel for \"No.\"");
				}
				else  {
				patronId.value = otherEmail.split("@")[0];
				domain = otherEmail.split("@")[1];
				dC = false
				}
			}
			while (dC == true)

			if (dC == false && domain == "")  {

				patronAcctClass[3].checked = false
				patronAcctClass[0].checked = true
				AcctClass = patronAcctClass[0].value
				domain = "rutgers.edu"
				alert("The account type will be defaulted to eden.");

			}
		
		}

		if (patronAcctClass[Count].checked  && Count<4)  {

		AcctClass = patronAcctClass[Count].value
		domain    = "rutgers.edu"
		}

	}

}


//Generating Subject field for e-mail
if (liC == 1)  {
	
	form.subjectField.value = "FOUND: "+lostItems+" at "+location;
}

else  {
	form.subjectField.value = "FOUND: Belongings at the "+location;
}
//Generating timestamp
//Variable creation for time componenets
var d;
var theDate   = new Date();
var theHour   = theDate.getHours();
var theMinute = theDate.getMinutes();
var theMonth  = theDate.getMonth() + 1;
var theDay    = theDate.getDate();
var theYear   = theDate.getFullYear();

//AM/PM generation for timestamp

var ap = "AM";

if (theHour > 11)  { 

	ap = "PM";
}

if (theHour > 12)  {
 
	theHour = theHour - 12;
}

if (theHour == 0)  { 

	theHour = 12;
}

if (theMinute < 10)  {

	theMinute = "0"+theMinute;
}

d = theHour+":"+theMinute+" "+ap+" on "+theMonth+"/"+theDay+"/"+theYear+".";

//Generating postnotes for certain items
//Each IF statement will be labeled accordingly
//When editing, make sure to maintain z-counter for array element numbers
var postNote = new Array ()
var z        =-1

//IF statement for ALL ITEMS at ARC

if (form.location.selectedIndex == 0)  {

	z++;
	postNote[z] = "Feel free to pick "+gCheck1+" up here at ARC Labs at your convenience.  Please try to arrive during normal business hours as a supervisor must be on duty for you to retrieve your item. When you arrive, just approach one of our consultant staff members in the consultant station for assistance and provide them with your item's Lost and Found Number (#"+linenum+").  Please bring a valid form of ID.";
}

//IF statement for ALL ITEMS at C4, DLIB, DCENT

if (!form.location.selectedIndex == 0)  {

	z++;
	postNote[z] = "Feel free to pick "+gCheck1+" up here at your convenience.  Please try to arrive during normal business hours as a supervisor must be on duty for you to retrieve your item. When you arrive, just approach one of our consultant staff members in the consultant station for assistance and provide them with your item's Lost and Found Number (#"+linenum+").  Please bring a valid form of ID.";
}

//IF statement for LAPTOPS found at ARC

if (form.choice[9].checked && form.location.selectedIndex == 0)  {

	z++;
	postNote[z] = "Please be aware that laptops will be turned in to Public Safety within the day.  You may contact us to confirm the location of your possessions.";
}

//IF Statement for VALUABLES found at ARC

if ((form.choice[2].checked ||  form.choice[3].checked ||  form.choice[5].checked ||  form.choice[7].checked  || otherIsValuable) && form.location.selectedIndex == 0)  {
	
	z++;
	postNote[z] = "Valuables such as wallets, cellphones, keys, and bags will be immediately stored for safekeeping and can only be retrieved when a supervisor or manager is present."
}

//IF statement for FLASH DRIVES found at ARC

if (form.choice[0].checked && form.location.selectedIndex == 0)  {

	z++;
	postNote[z] = "Flash drives that have not been claimed before the end of the day are stored for safekeeping and can only be retrieved when a supervisor or manager is present.  Feel free to contact us to see if someone is available to retrieve your possessions.";
}

//IF statement for VALUABLES found at BEST

if ((form.choice[2].checked ||  form.choice[3].checked ||  form.choice[5].checked ||  form.choice[7].checked  || otherIsValuable) && form.location.selectedIndex == 1)  {
	
	var moveDate = new Date();
	moveDate.setDate(moveDate.getDate() + 1);
	z++;
	postNote[z] = "Valuables such as wallets, cellphones, keys, bags, or sensitive documents will be stored at BEST for the rest of today, but will be moved to ARC by the morning of " + moveDate.toDateString() + ".";
}

//IF statement for VALUABLE ITEMS found at C4, DLib, DCent
/*
if ((form.choice[2].checked ||  form.choice[3].checked ||  form.choice[5].checked ||  form.choice[6].checked ||  form.choice[9].checked  || otherIsValuable)&& !form.location.selectedIndex == 0)  {

	z++;
	postNote[z] = "Wallets, bags, electronics, and other valuables will be turned in to the front desk by the end of my shift, or by closing time.";
}*/

//Universal post-note for contacting

if (form.location.selectedIndex == 0)  {

	z++
	postNote[z] = "You can reach us at "+sitePhone+" or at arc_lab@email.rutgers.edu if you have any questions."
}

if (!form.location.selectedIndex == 0)  {

	z++
	postNote[z]= "You can reach us at "+sitePhone+" or at arc_lab@email.rutgers.edu if you have any questions."
}

//Generating the Hours of Operation
//Time of year 0 = Regular hours, 1 = Summer Hours, 2 = Winter Hours, 3 = Spring Hours
var timeYear;

switch (form.timeYear.selectedIndex)  {

case 0:

	timeYear = "regular hours";
	break;
	
case 1:

	timeYear = "summer session hours";
	break;
	
case 2:

	timeYear = "winter break hours";
	break;
	
case 3:

	timeYear = "spring break hours";
	break;

	
default:
	timeYear = "regular hours";
}

//Generating hours of operating for each site, matching location.selectedIndex and timeYear.selectedIndex with "_" as a separator

var siteHours = new Array ()
var hoursCase = form.location.selectedIndex+"_"+form.timeYear.selectedIndex;

// ARC Regular Hours is 0_0
// BEST Regular hours is 1_0


switch (hoursCase) {

case "0_0":

	siteHours[0]="Mon-Thurs:     8:15 AM-9:00 PM";
	siteHours[1]="Friday:        8:15 AM-6:00 PM";
	siteHours[2]="Saturday:     11:00 AM-3:00 PM";
	siteHours[3]="Sunday:       11:00 AM-9:00 PM";
	break;

case "0_1":
	siteHours[0]="Mon-Thurs:     8:15 AM-11:00 PM";
	siteHours[1]="Friday:        8:15 AM-5:00 PM";
	siteHours[2]="Saturday:      closed";
	siteHours[3]="Sunday:       11:00 AM-9:00 PM";
	break;

case "0_2":
	siteHours[0]="Sunday:    closed";
	siteHours[1]="Mon-Fri:   9:00 AM-5:00 PM";
	siteHours[2]="Saturday:  closed";
	break;

case "0_3":
	siteHours[0]="Sunday:    closed";
	siteHours[1]="Mon-Fri:   10:00 AM-4:00 PM";
	siteHours[2]="Saturday:  closed";
	break;

case "1_0":
	siteHours[0]="Mon-Thurs:     8:15 AM-9:00 PM";
	siteHours[1]="Friday:        8:15 AM-6:00 PM";
	siteHours[2]="Saturday:     11:00 AM-3:00 PM";
	siteHours[3]="Sunday:       11:00 AM-9:00 PM";
	break;
	
default:
	siteHours[0]="closed";
}

//Site and time validation

if((!form.timeYear.selectedIndex == 0) && (form.location.selectedIndex == 1 || form.location.selectedIndex == 2))  {

	alert("That site is closed at this time!!");
}

//Signature generator
var signatureGen = new Array ()
signatureGen[0] = "----------------";
signatureGen[1] = form.consultantName.value;
signatureGen[2] = form.consultantRole.value+", Busch Campus";
signatureGen[3] = "Office of Information Technology";
signatureGen[4] = form.consultantId.value+"@oit.rutgers.edu";


//Generating the values for the e-mail fields

form.fromField.value = "Rutgers University OIT <arc_lab@email.rutgers.edu>";
form.toField.value = form.patronId.value+"@"+AcctClass+domain;
form.ccField.value = "arc_lab@email.rutgers.edu";
form.bccField.value = form.consultantId.value+"@oit.rutgers.edu";

//Generated e-mail message
form.bodyField.value = "Dear "+form.patronName.value+", \
\n\nI am contacting you to inform you that the following "+gCheck2+" believed to be yours "+gCheck3+" been turned in to us at the "+location+" and "+gCheck4+" available for pick up:\
\n\n"+lostItems+"\
\n\n"+postNote.join("\n\n")+"\
\n\nThe "+timeYear+" of supervisor availability at the "+location+" are as follows:\
\n"+siteHours.join("\n")+"\
\n\nLost and Found #"+linenum+"\
\n\nHave a nice day!\
\n\n"+signatureGen.join("\n");

}
}