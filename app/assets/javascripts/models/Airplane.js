var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults: {
    row: '5',
    columns: '5',
    name: 'Lucky'
  }
});
