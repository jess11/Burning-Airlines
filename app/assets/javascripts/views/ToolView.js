var app = app || {};

app.ToolView = Backbone.View.extend({
  el: '#toolView',


  render: function () {
    this.$el.html( $('#tools').html() );


  }
})
