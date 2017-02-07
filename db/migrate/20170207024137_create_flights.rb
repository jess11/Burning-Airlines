class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_no
      t.date :date
      t.string :origin
      t.string :destination
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
