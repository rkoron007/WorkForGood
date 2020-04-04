json.company do
  json.partial! 'api/companies/company', user: @user
end
