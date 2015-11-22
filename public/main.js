var $ = require('jquery');
var Backbone = require('backbone');
var LayoutView = require('./layoutView');
var Router = require('./router');

$( ".l-signUpBtn" ).on( "click", function() {
  $('.signUpDiv').removeClass('hide');
  $('.loginDiv').addClass('hide');
});

$( ".s-loginBtn" ).on( "click", function() {
  $('.signUpDiv').addClass('hide');
  $('.loginDiv').removeClass('hide');
});

$( ".profileAddItem" ).on( "click", function() {
  $('.myItemsBtn').addClass('hide');
  $('.addItemMenu').removeClass('hide');
});

$( ".marketAddItem" ).on( "click", function() {
  $('.addMarketItemForm').removeClass('hide');
});

$( ".marketBtn" ).on( "click", function() {
  $('.profilePage').addClass('hide');
  $('#market').removeClass('hide');
});

$( ".homeBtn" ).on( "click", function() {
  $('.profilePage').removeClass('hide');
  $('#market').addClass('hide');
});


$(function () {
  new LayoutView();
  new Router();
  Backbone.history.start();
  new LoginFormView();
  // new layoutView();

});
