
var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.text($('#testing').text());
    //to render the other views - will go inside this function also
  },
});
