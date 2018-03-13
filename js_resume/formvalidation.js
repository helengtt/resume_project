
$(document).ready(function() {

	console.log('ready!');

	$(".btnSend").click(function() {

		function validateName() {
			var name = document.getElementById('txtName').value;
			if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
				producePrompt('First and last name, please.','name-error', 'red');
	    		return false;
			}

			producePrompt('Valid', 'name-error', 'green');
			return true;	
		}

		function validatePhone() {
			var phone = document.getElementById('txtPhone').value;
			if(phone.length != 10) {
				producePrompt('Include area code.', 'phone-error', 'red');
	      		return false;
			}

			if(!phone.match(/^[0-9]{10}$/)) {
		      producePrompt('Only digits, please.' ,'phone-error', 'red');
		      return false;
	    	}

	    	producePrompt('Valid', 'phone-error', 'green');
		    return true;
	    }

	    function validateMobile() {
			var mobile = document.getElementById('txtEmail').value;
			if(mobile.length != 10) {
				producePrompt('Include area code.', 'mobile-error', 'red');
	      		return false;
			}

			if(!mobile.match(/^[0-9]{10}$/)) {
		      producePrompt('Only digits, please.' ,'mobile-error', 'red');
		      return false;
	    	}

	    	producePrompt('Valid', 'mobile-error', 'green');
		    return true;
	    }

	    function validateEmail () {
	  		var email = document.getElementById('contact-email').value;
	  		if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
	    		producePrompt('Email Invalid', 'email-error', 'red');
	    		return false;
	  		}

	  		producePrompt('Valid', 'email-error', 'green');
	  		return true;
		}


	    function validateMessage() {
		  	var message = document.getElementById('txtMessage').value;

			if (message.length < 10) {
				producePrompt(message.length + ' more characters required','message-error','red');
				return false;
			}

		  	producePrompt('Valid', 'message-error', 'green');
		  	return true;

		}

		function validateForm() {
			 if (!validateName() || !validatePhone() || !validateMobile() || !validateEmail() || !validateMessage()) {
			    jsShow('submit-error');
			    producePrompt('Oops! Error happens. The correct information will guarantee my instant reply.', 'submit-error', 'red');
			    setTimeout(function(){jsHide('submit-error');}, 2000);
			 }
		}

		function jsShow(id) {
		  document.getElementById(id).style.display = 'block';
		}

		function jsHide(id) {
		  document.getElementById(id).style.display = 'none';
		}

	})


});