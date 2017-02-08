$(document).ready(function () {
  app.appRouter = new app.AppRouter();
  //creating flights collection and collecting data
  app.flights = new app.Flights();
  app.flights.fetch().done(function () {
    Backbone.history.start();
  });

});
