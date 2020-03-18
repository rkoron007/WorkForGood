class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :type, null: false
      t.string :name, null: false
      t.string :website_url
    end

    add_index(:companies, :name)
  end
end
