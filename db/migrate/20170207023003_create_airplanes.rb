class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :row
      t.integer :columns
      t.string :name

      t.timestamps null: false
    end
  end
end
