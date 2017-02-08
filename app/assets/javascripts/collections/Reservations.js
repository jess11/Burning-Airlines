var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  model: app.Reservation,
  initialize: function () {
  // Self rendering secrets
  this.on('add', function (r) {
    var reservationView = new app.ReservationsView({model:r});
    reservationView.render();
  });
}
});

app.bookings = new app.Reservations();
