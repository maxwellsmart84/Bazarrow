var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var GoodsModel = require('./goodsModel');

module.exports = Backbone.View.extend({
  className: 'addItem',
  model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'submitForm'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new GoodsModel();
    }
  },
  submitForm: function (event) {
    event.preventDefault();
    var newItem = {
      image: this.$el.find('input[name="item_image"]').val(),
      title: this.$el.find('input[name="title"]').val(),
      description: this.$el.find('input[name="description"]').val(),
    };
    this.model.set(newItem);
    this.model.save();
    this.$el.find('input').val('');
  },
  template: _.template(tmpl.goodsForm),
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // bookViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
