var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: '/airplanes',
  model: app.Airplane,
  initialize: function(){

}

});
