var $ = require('jquery');

$( ".l-signUpBtn" ).on( "click", function() {
  $('.signUpDiv').removeClass('hide');
  $('.loginDiv').addClass('hide');
});

$( ".s-loginBtn" ).on( "click", function() {
  $('.signUpDiv').addClass('hide');
  $('.loginDiv').removeClass('hide');
});
