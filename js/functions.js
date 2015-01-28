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

/*This will populate homepage with latest posted recipes*/
$(document).on("pagebeforecreate", "#main-page", function(){
    $.ajax({
        type: "POST",
        url:'http://www.rich-city-762.appspot.com',
        //url: 'http://localhost:28080',
        data: {queryType: "homepage"},
        success: function(results)
        {
            //alert(results);    //alerts text echoed from php script.  only temporary  
            //var stringArr = JSON.stringify(results);
            var realArr = $.parseJSON(results);
            console.log(realArr);
            
            for(var i = 0; i < realArr.length; i++)
            {
                $('#homepage-results').append('<li class="ui-li-has-thumb ui-first-child homepage-food-li"><a href="#" id="' + realArr[i].recipeId + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img id="food-image" src="' + realArr[i].pictureLocation +'"/><br>' + realArr[i].name +'<br>Rating: ' + realArr[i].rating +'/10</a></li>');
            }
            
            
        },
        error: function (error) {
            console.log(error);
        }
    });
});