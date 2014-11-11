Parse.initialize("CteLLpCfDDSF940eJkYbdSakKYecqRKhB55PtKac", "Z0PHT9eOK69oLEKMHzKxDUtL9Lj59165nxaRru1O");

$("#signup-form").submit(function(){
    var user = new Parse.User();
    var signup_username = $('#signup-username').val();
    var signup_email = $('#signup-email').val();
    var signup_password = $('#signup-password').val();  
    
    user.set("username", signup_username);
    user.set("email", signup_email);
    user.set("password", signup_password);
    
    user.signUp(null, {
      success: function(user) {
          alert("Successful");
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
    
    Parse.User.logIn(signup_username, signup_password, {
	  success: function(user) {
	  },
	  error: function(user, error) {
	    alert("Error: " + error.code + " " + error.message);
	  } 
	});
});