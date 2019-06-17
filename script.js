$(document).ready(function() {
  
  $("#login").click(function(e) {
    
    // Stops form from submitting
    e.preventDefault();
    
    // Form Variables
    var username = $("#inputUsername").val();
    var password = $("#inputPassword").val();

    // Check if username is empty
    if (username.length === 0) {
      $("#invalidUsername").text("Please enter your username.").show('fast');
      $("#inputUsername").focus(function() {
        $('#invalidUsername').hide('fast');
      });
      return false;
    } 
    
    // Check if username is valid and remove error if there
    // else if the user name is valid
    // remove the error message
    
    // Check if password is empty
    else if (password.length === 0) {
        $("#invalidPassword").text("Please enter your password.").show('fast');
        $("#inputPassword").focus(function() {
          $('#invalidPassword').hide();
        });
        return false;
    } 
    
    // Check if password is valid and remove error if there
    // else if the user name is valid
    // remove the error message
    
    // Show if login is successful
    else {
      $('#login-success').text("Login confirmed.").show('fast');
      
      // Clear username and password fields after login
      $('#inputUsername').val("");
      $('#inputPassword').val("");
    }
    

  });

});

// remove error when user clicks in input
// $('#login-form').on("keyup", function() {
//   $(this).removeClass("invalid-feedback");
// });