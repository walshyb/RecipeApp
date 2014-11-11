Parse.initialize("CteLLpCfDDSF940eJkYbdSakKYecqRKhB55PtKac", "Z0PHT9eOK69oLEKMHzKxDUtL9Lj59165nxaRru1O");

/*Signs user up and then logs in*/
$(document).on("submit", "#signup-form", function(){
    var user = new Parse.User();
    var signup_username = $('#signup-username').val();
    var signup_email = $('#signup-email').val();
    var signup_password = $('#signup-password').val();  
    
    user.set("username", signup_username);
    user.set("email", signup_email);
    user.set("password", signup_password);
    
    user.signUp(null, {
      success: function(user) {
        Parse.User.logIn(signup_username, signup_password, {
            success: function(user) {
                alert("Sign in successful");
            },
            error: function(user, error) {
                alert("Error: " + error.code + " " + error.message);
            } 
        });
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
});

/*Logs user in*/
$(document).on("submit", "#login-form", function(){
    var login_username = $('#login-username').val();;
    var login_password = $('#login-password').val();;
    Parse.User.logIn(login_username, login_password, {
        success: function(user) {
            alert("Sign in successful");
        },
        error: function(user, error) {
            alert("Error: " + error.code + " " + error.message);
        } 
    });
});

/*Signs user out*/
$(document).on("click", "#logout-btn", function(){
    alert(Parse.User.current().getUsername());
    Parse.User.logOut();
});