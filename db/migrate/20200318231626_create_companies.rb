class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :website_url
      t.string :description, null: false
      t.string :mission_statement
      t.string :work_field
      t.string :city
      t.string :ein
    end

    add_index(:companies, :name)
  end
end
