class ChangeRowTypeInAirplanes < ActiveRecord::Migration
  def change
    change_column :row, :integer
  end
end
