$(document).ready(function () {
  app.appRouter = new app.AppRouter();
  //creating flights collection and collecting data
  app.flights = new app.Flights();
  app.flights.comparator = 'date';
  app.airplanes = new app.Airplanes();
  app.bookings = new app.Reservations();
  app.flights.fetch().done(function () {
    app.airplanes.fetch().done(function () {
      app.bookings.fetch().done(function () {
        Backbone.history.start();
      })
    })
  });

  // app.bookings = new app.Reservations();
  // app.bookings.fetch();


  // polling
  // setInterval(function() {
  //   app.bookings.fetch();
  // }, 5000);

});
