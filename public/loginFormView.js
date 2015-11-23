var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var UserModel = require('./userModel');
// var NewUserModel = require('./newUserModel');

module.exports = Backbone.View.extend({
  el: '.loginSection',
  className: '',
  template: _.template(tmpl.userForm),
  // model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    // 'click .l-signUpBtn': 'signUpFormShow',
    // 'click .l-loginBtn': 'submitLoginForm',
    // 'click .s-loginBtn': 'loginFormShow',
    // 'click .s-signUpBtn': 'submitSignUpForm',
    // $( ".l-signUpBtn" ).on( "click", function() {
    //   $('.signUpDiv').removeClass('hide');
    //   $('.loginDiv').addClass('hide');
  },
  initialize: function () {
    if(!this.model) {
      this.model = new UserModel();
      // this.model2 = new NewUserModel();
    }
    this.render();
  },
  signUpFormShow: function (event){
    $('.signUpDiv').removeClass('hide');
    $('.loginDiv').addClass('hide');
  },
  loginFormShow: function (event){
    $('.signUpDiv').addClass('hide');
    $('.loginDiv').removeClass('hide');
  },
  submitLoginForm: function (event) {
    event.preventDefault();
    var returnUser = {
      username: this.$el.find('input[name="signUpUsername"]').val(),
      location: this.$el.find('input[name="signUpLocation"]').val(),
      email: this.$el.find('input[name="signUpEmail"]').val(),
      password: this.$el.find('input[name="signUpPassword"]').val()

    };
    this.model.save();
    this.$el.find('input').val('');
  },

  submitSignUpForm: function (event) {
    event.preventDefault();
    console.log('is this working?');
    var newUser ={
      image: this.$el.find('input[name="signUpAvatar"]').val(),
      username: this.$el.find('input[name="signUpUsername"]').val(),
      location: this.$el.find('input[name="signUpLocation"]').val(),
      email: this.$el.find('input[name="signUpEmail"]').val(),
      password: this.$el.find('input[name="signUpPassword"]').val(),
    };
    this.model.set(newUser);
    this.model.save();
    this.$el.find('input').val('');
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
