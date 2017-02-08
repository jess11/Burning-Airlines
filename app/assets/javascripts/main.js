$(document).ready(function () {
  app.appRouter = new app.AppRouter();
  //creating flights collection and collecting data
  app.flights = new app.Flights();
  app.flights.comparator = 'date';
  app.airplanes = new app.Airplanes();
  app.flights.fetch().done(function () {
    app.airplanes.fetch().done(function () {
      Backbone.history.start();
    })
  });

});
