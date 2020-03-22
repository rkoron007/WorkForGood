class CreateWorkers < ActiveRecord::Migration[5.2]
  def change
    create_table :workers do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :description, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :website_url
      t.string :occupation, null: false
      t.string :fields_of_interest
      t.string :city, null: false
    end

    add_index(:workers, :email)
    add_index(:workers, :password_digest)
    add_index(:workers, :session_token)
    add_index(:workers, :first_name)
    add_index(:workers, :last_name)
  end
end
