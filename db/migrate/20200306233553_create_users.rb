class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :description, null: false
      t.string :type, null: false
    end
    
    add_index(:users, :type)
    add_index(:users, :email)
    add_index(:users, :password_digest)
  end

end
