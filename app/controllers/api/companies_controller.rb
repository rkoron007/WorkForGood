class Api::CompaniesController < ApplicationController

  def create
    @user = Company.new(company_params)
    if @user.save
      sign_in!(@user)
      render "api/companies/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = Company.find(params[:id])
    render 'api/companies/show'
  end

  def update
    @user = Company.find(params[:id])
    if @user.update(company_params)
        render "api/companies/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    @companies = Company.all
    render json: @companies
  end

  private
  
  def company_params
    params.require(:company).permit(:password,
                                   :email,
                                   :name,
                                   :description,
                                   :website_url,
                                   :mission_statement,
                                   :work_field,
                                   :ein,
                                   :city)
  end
end
