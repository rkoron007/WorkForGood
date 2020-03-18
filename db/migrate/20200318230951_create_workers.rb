class CreateWorkers < ActiveRecord::Migration[5.2]
  def change
    create_table :workers do |t|
      t.string :type, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :portfolio_url
      t.string :work_field, null: false
    end

    add_index(:workers, :work_field)
  end
end
