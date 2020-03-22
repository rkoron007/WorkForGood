class AddUniquenessConstraints < ActiveRecord::Migration[5.2]
  def change
    add_index :companies, :name, unique: true
    add_index :workers, :email, unique: true
  end
end
