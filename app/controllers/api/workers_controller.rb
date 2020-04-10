class Api::WorkersController < ApplicationController
  def create
    @user = Worker.new(worker_params)
    if @user.save
      sign_in!(@user)
      render 'api/workers/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = Worker.find(params[:id])
    render 'api/workers/show'
  end

  def update
    @user = Worker.find(params[:id])
    if @user.update(worker_params)
        render "api/workers/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index
    @workers = Worker.all
    render json: @workers
  end

  private
  
  def worker_params
    params.require(:worker).permit(:email,
                                   :password,
                                   :description,
                                   :name,
                                   :last_name,
                                   :occupation,
                                   :website_url,
                                   :fields_of_interest,
                                   :city)
  end
end
