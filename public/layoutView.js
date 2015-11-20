var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var LoginFormView = require('./loginFormView');
var FormView = require('./formView');
var UserView = require('./userView');
var GoodsView = require('./goodsView');
var PostView = require('./postView');
var UserCollectionView = require('./userCollectionView');
var GoodsCollectionView = require('./goodsCollectionView');
var UserCollection = require('./userCollection');
var GoodsCollection = require('./goodsCollection');


module.exports = Backbone.View.extend({
  el: '#layoutView',
  initialize: function () {
    var self = this;
    var loginFormHTML = new LoginFormView();
    var userHTML = new UserView();
    var formHTML = new FormView();
    var goodsHTML = new GoodsView();
    var postHTML = new PostView();
    var goodsCollection = new GoodsCollection();
    goodsCollection.fetch().then(function () {
      var goodsCollectionView = new GoodsCollectionView({collection: goodsCollection});
      // self.$el.find('section').html()
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('footer').html(footerHTML.render().el);
      self.$el.find('.submit-section').html(formHTML.render().el);
    });

    var userCollection = new UserCollection();
    imdbCollection.fetch().then(function () {
      var userCollectionView = new UserCollectionView({collection: userCollection});
      // self.$el.find('section').html()
      self.$el.find('header').html(headerHTML.render().el);
      self.$el.find('footer').html(footerHTML.render().el);
      self.$el.find('.submit-section').html(formHTML.render().el);
    });
  }

});
