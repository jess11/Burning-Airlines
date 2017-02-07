var app = app || {};

app.PostView = Backbone.View.extend({  //another view for individual posts
  el: '#main',
  render: function(){
    var postTemplate = $('#postTemplate').text();
    var postHTML = _.template(postTemplate);
    this.$el.html(postHTML(this.model.attributes));
  }
})
