var $ = require('jquery');
var Backbone = require('backbone');

$( ".l-signUpBtn" ).on( "click", function() {
  $('.signUpDiv').removeClass('hide');
  $('.loginDiv').addClass('hide');
});

$( ".s-loginBtn" ).on( "click", function() {
  $('.signUpDiv').addClass('hide');
  $('.loginDiv').removeClass('hide');
});

var layoutView = require('./layoutView');
var Router = require('./router');

$(function () {
  new Router();
  Backbone.history.start();
  new layoutView();

});
