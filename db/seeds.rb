
User.destroy_all
u1 = User.create :username => 'jess11', :password => 'ch1cken', :password_confirmation => 'ch1cken', :admin => true
u2 = User.create :username => 'naynoms', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :username => 'LaaLaa23', :password => 'chicken', :password_confirmation => 'chicken'

Airplane.destroy_all
a1 = Airplane.create :name => 'big plane', :row => 32, :columns => 12
a2 = Airplane.create :name => 'small plane', :row => 12, :columns => 2

Flight.destroy_all
f1 = Flight.create :flight_no => 'BA666', :date => DateTime.strptime('02/14/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Hell'
f2 = Flight.create :flight_no => 'BA010', :date => DateTime.strptime('02/15/2017', '%m/%d/%Y'), :origin => 'Sydney', :destination => 'Adelaide'
f3 = Flight.create :flight_no => 'BA123', :date => DateTime.strptime('02/16/2017', '%m/%d/%Y'), :origin => 'Brisbane', :destination => 'Perth'

Reservation.destroy_all
r1 = Reservation.create :seat => '13A'
r2 = Reservation.create :seat => '3A'
r3 = Reservation.create :seat => '30C'
r4 = Reservation.create :seat => '10B'


#Associations
u1.reservations << r1
u2.reservations << r2
u3.reservations << r3

a1.flights << f1 << f3
a2.flights << f1 << f2

f1.reservations << r1 << r2
f2.reservations << r3
f3.reservations << r4
