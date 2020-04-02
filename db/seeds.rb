# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

worker1 = Worker.create({ email: 'lillybilly@bill.com',
                          password: '123456',
                          description: "i'm good at working",
                          name: 'Lilly',
                          last_name: 'Billy',
                          website_url: 'https://www.google.com/',
                          occupation: 'designer',
                          fields_of_interest: 'healthcare',
                          city: 'San Francisco'
                          })

company1 = Company.create({ email: 'healthcares@care.com',
                          password: '123456',
                          description: "realy good health care",
                          name: 'Health Cares',
                          website_url: 'https://www.google.com/',
                          mission_statement: 'taking care of people',
                          work_field: 'healthcare',
                          city: 'San Francisco',
                          ein: '1234567'
                          })

