
var app = app || {};

app.SeatingView = Backbone.View.extend({
  tagName: 'div',
  className: 'plane',
  events: {
  'click .seat': 'selectSeat',
  'click #save': 'reserveSeat'
},
  render: function() {
    this.$el.html('<button id="save">Reserve</button>');
    this.$el.appendTo('#main');
    console.log(this.model);
    var planeID = this.model.get('airplane_id');
    var plane = app.airplanes.where({id: planeID });
    var columns = plane[0].get('columns');
    var rows = plane[0].get('row');
    console.log(columns);
    console.log(rows);
    // letters to set to seat
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // looping rows & columns

    for (var x = 1; x <= rows; x++) {
      for (var y = 1; y <= columns; y++) {
        var seatName = x.toString() + letters[y-1]
        var $seat = $('<div class="unselected seat" id=' +seatName + '>' + seatName + '</div>');
        $seat.addClass(seatName);
        this.$el.prepend($seat)
      }
    }


  },
  selectSeat: function(event){
    // debugger;
    var $seatName = $(event.target).text();
    console.log($seatName);
    $(event.target).toggleClass('reserved')

  },
  reserveSeat: function() {
    debugger;
    var arrayOfselectedSeats = $('.plane .reserved')
    //underscore each array
    // grab the seat id (text,val)
    app.bookings.create({
      user_id:
      flight_id:
      seat:
    })
  },



});


// createSeats: function() {
//   var planeID = this.model.attributes.airplane_id;
//   var plane = app.airplanes.where({id: planeID });
//   var columns = plane[0].get('columns');
//   var rows = plane[0].get('row');
//   console.log(columns);
//   console.log(rows);
//   // letters to set to seat
//   var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//   // looping rows & columns
//   for (var x = 1; x <= rows; x++) {
//     for (var y = 1; y <= columns; y++) {
//       var $seat = $('<div class="unselected"></div>');
//       $seat.addClass(x.toString() + letters[y-1]);
//       $('#main').append($seat);
//     }
//   }
// }




//
//
//
//
//
//
// // airplane = { name: 'big plane', row: 32, columns: 12 };
//
// // need unique seat numbers/id - seat
//
// // To create airplane layout - table
// //
// // var init = function (reservedSeat) {
// //   var str = [], className;
// //   for (i = 0; i < airplane.row; i++) {
// //     for (j = 0; j < airplane.columns; j++) {
// //       className = airplane.seatCss + ' ' + airplane.rowCssPrefix + i.toString() + ' ' + airplane.colCssPrefix + j.toString();
// //       if ($.isArray(reservedSeat) && $.inArray(reservedSeat) != -1) {
// //         className += ' ' + airplane.selectedSeatCss;
// //       }
// //       str.push('<li class="' + className + '"' + 'style="top:' + (i * airplane.seatHeight).toString() + 'px;left:' + (j * airplane.seatWidth).toString() + 'px">' + '</li>');
// //     }
// //   }
// //   $('#main').html(str.join(''));
// // };
//
//
// // To select seats
// //
// // $('.' + airplane.seatCss).click(function () {
// // if ($(this).hasClass(airplane.selectedSeatCss)){
// //     alert('This seat is already reserved');
// // }
// // else{
// //     $(this).toggleClass(airplane.selectingSeatCss);
// //     }
// // });
//
//
// // using aiplane object from db
// // row
// // columns
// // seat no = 'row' + 'columns'
//
// // seatingView: function() {
// //   var numRows = parseInt(this.$el.find("input[name='row']").val());
// //   var row = [];
// //   for(var i=1; i <= numRows; i++) {
// //     rows.push({ row: i });
// //   }
// //
// //   var numColumns = parseInt(this.$el.find("input[name='columns']").val());
// //   var columns = [];
// //   for(var i=0; i < numColumns; i++) {
// //     columns.push({ column: columnLetters[i] });
// //   }
//

//   // selectSeat: function(sel){
//   //   // stopping
//   //   sel.stopImmediatePropagation();
//   //   // Start with listing seats whether selected or not
//   //   $('.seat').not('.reserved').addClass('unselected');
//   //     if ($(sel.currentTarget).hasClass('selected')) {
//   //       alert ("This seat has been booked. Please choose another seat.");
//   //       return;
//   //     }
//   //     if ( app.reservations.findWhere({seat: sel.currentTarget.id, airplane_id: this.model.attributes.id })) {
//   //         alert ("This seat is currently unavailable. Please choose another seat.");
//   //         this.getReservations(this.model.attributes.id);
//   //         return;
//   //     }
//   //     $('.seat').removeClass('selected');
//   //     $(sel.currentTarget).removeClass('unselected');
//   //     $(sel.currentTarget).addClass('selected');
//   //
//   //     var seat = $(".selected").eq(0).attr("id");
//   //     var flight_id = this.model.attributes.id;
//   //     var reservations = app.reservations.where({user_id: app.current_user.id, confirmed: false});
//   //     _.each(reservations, function (reservation) {
//   //       reservation.destroy();
//   //     });
//   //     app.reservations.remove(reservations);
//   //     var reservation = new app.Reservation({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
//   //     reservation.save().done(function() {
//   //       app.reservations.add( reservation );
//   //     });
//   //   }
//
//
//
//             // var addAisle = function() {
//             //   if (columns === '4') {
//             //       $('.columnB').addClass('aisle-right');
//             //   }else if (columns === '6') {
//             //       $('.columnC').addClass('aisle-right');
//             //   }else if (columns === '8') {
//             //       $('.columnB').addClass('aisle-right');
//             //       $('.columnF').addClass('aisle-right');
//             //   }
