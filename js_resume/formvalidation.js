
$(document).ready(function() {

	console.log('ready!');

	$(".btnSend").click(function() {

		function validateName() {
			var name = document.getElementById('txtName').value;

			if(name.length == 0) {
			    document.getElementById("name-error").innerHTML = "Name needed please.";
			    return false;
			}

			if (!name.match(/^[A-Za-z]+$/)){
				document.getElementById("name-error").innerHTML ="Your name please.";
	    		return false;
			}

			document.getElementById("name-error").innerHTML ="Valid";
			return true;	
		}

		function validatePhone() {
			var phone = document.getElementById('txtPhone').value;

			if(phone.length == 0) {
		    	document.getElementById("phone-error").innerHTML = "";
		    	return true;
		    }

			if(phone.length == 10 && phone.match(/^[0-9]{10}$/)) {
		    	document.getElementById("phone-error").innerHTML = "Valid";
		    	return true;
	    	}

	    	document.getElementById("phone-error").innerHTML = "10 digits please.";
		    return false;
	    	
	    }

	    function validateMobile() {
			var mobile = document.getElementById('txtMobile').value;

			if(mobile.length == 0) {
		    	document.getElementById("mobile-error").innerHTML = "";
		    	return true;
		    }


			if(mobile.length == 10 && mobile.match(/^[0-9]{10}$/)) {
	      		document.getElementById("mobile-error").innerHTML = "Valid";
	      		return true;
	    	}

	    	document.getElementById("mobile-error").innerHTML ="10 digits please.";
		    return false;
	    }

	    function validateEmail () {
	  		var email = document.getElementById('txtEmail').value;

	  		if(email.length == 0) {
			    document.getElementById("email-error").innerHTML = "Email Invalid";
			    return false;
			}

	  		if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
	    		document.getElementById("email-error").innerHTML = "Email Invalid";
	    		return false;
	  		}

	  		document.getElementById("email-error").innerHTML = "Valid";
	  		return true;
		}


	    function validateMessage() {
		  	var message = document.getElementById('txtMessage').value;
		  	
		  	if(message.length == 0) {
			    document.getElementById("message-error").innerHTML = "Message is required.";
			    return false;
			}

			var required = 10;
			var left = required - message.length;
			if (left >0) {
				document.getElementById("message-error").innerHTML = left + " more characters please.";
				return false;
			}

		  	document.getElementById("message-error").innerHTML = "Valid";
		  	return true;

		}

		function validateForm() {
			 if (!validateName() || !validatePhone() || !validateMobile() || !validateEmail() || !validateMessage()) {
			    jsShow('submit-error');
			    document.getElementById("submit-error").innerHTML = "Oops! Error happens. The correct information will guarantee my instant reply.";
			    return false;
			 }else{
			 	return true;	
			 }
		}

		function jsShow(id) {
		  document.getElementById(id).style.display = 'block';
		}

		return validateForm();

	})


});