# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_18_231626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "website_url"
    t.string "description", null: false
    t.string "mission_statement"
    t.string "work_field"
    t.string "city"
    t.integer "ein"
    t.index ["name"], name: "index_companies_on_name"
  end

  create_table "workers", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "description", null: false
    t.string "name", null: false
    t.string "last_name", null: false
    t.string "website_url"
    t.string "occupation", null: false
    t.string "fields_of_interest"
    t.string "city", null: false
    t.index ["email"], name: "index_workers_on_email", unique: true
    t.index ["last_name"], name: "index_workers_on_last_name"
    t.index ["name"], name: "index_workers_on_name"
    t.index ["password_digest"], name: "index_workers_on_password_digest"
    t.index ["session_token"], name: "index_workers_on_session_token"
  end

end
