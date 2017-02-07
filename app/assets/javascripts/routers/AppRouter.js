var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '/search': 'index'
  },
  index: function() {
    var appView = new app.AppView();
    appView.render();
  }
});
