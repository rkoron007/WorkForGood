class Api::CompaniesController < ApplicationController
skip_before_action :verify_authenticity_token
  def create
    @company = Company.new(company_params)
    if @company.save
      render json: @company
      # render "api/companies/show"
    else
      render json: @company.errors.full_messages, status: 401
    end
  end

  def show
    @company = company.find(params[:id])
    render json: @company
  end

  def update
    @company = company.find(params[:id])
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors.full_messages, status: 401
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
