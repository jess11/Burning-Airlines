var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults: {
    row: 5,
    column: 5,
    name: 'Lucky'
  }
});
