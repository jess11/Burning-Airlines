class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.integer :row
      t.integer :columns
      t.string :name

      t.timestamps null: false
    end
  end
end
