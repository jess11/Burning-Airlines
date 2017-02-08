
User.destroy_all
u1 = User.create :username => 'jess11', :password => 'ch1cken', :password_confirmation => 'ch1cken', :admin => true
u2 = User.create :username => 'naynoms', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :username => 'LaaLaa23', :password => 'chicken', :password_confirmation => 'chicken'

Airplane.destroy_all
a1 = Airplane.create :name => 'big plane', :row => 12, :columns => 6
a2 = Airplane.create :name => 'small plane', :row => 6, :columns => 6
a3 = Airplane.create :name => 'slow plane', :row => 10, :columns => 6

Flight.destroy_all
f1 = Flight.create :flight_no => 'BA666', :date => DateTime.strptime('02/14/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Hell'
f2 = Flight.create :flight_no => 'BA010', :date => DateTime.strptime('02/15/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Adelaide'
f3 = Flight.create :flight_no => 'BA123', :date => DateTime.strptime('02/16/2017', '%m/%d/%Y'), :origin => 'Brisbane', :destination => 'Perth'
f4 = Flight.create :flight_no => 'BA097', :date => DateTime.strptime('04/17/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Hell'
f5 = Flight.create :flight_no => 'BA683', :date => DateTime.strptime('05/19/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Hell'
f6 = Flight.create :flight_no => 'BA320', :date => DateTime.strptime('06/21/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Adelaide'
f7 = Flight.create :flight_no => 'BA092', :date => DateTime.strptime('07/22/2017', '%m/%d/%Y'), :origin => 'Brisbane', :destination => 'Perth'

Reservation.destroy_all
r1 = Reservation.create :seat => '2A'
r2 = Reservation.create :seat => '3A'
r3 = Reservation.create :seat => '5C'
r4 = Reservation.create :seat => '6B'


#Associations
u1.reservations << r1 << r2
u2.reservations << r2 << r3
u3.reservations << r3 << r4

a1.flights << f1 << f3
a2.flights << f2 << f6
a3.flights << f4 << f5 << f7

f1.reservations << r1 << r3
f2.reservations << r3 << r1
f3.reservations << r4 << r1
f4.reservations << r1 << r3
f5.reservations << r2 << r4
f6.reservations << r4
f7.reservations << r3
