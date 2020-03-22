class Api::WorkersController < ApplicationController

  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      sign_in!(@worker)
    else
      render json: @worker.errors.full_messages, status: 401
    end
  end

  def show
    @worker = worker.find(params[:id])
  end

  def update
    @worker = worker.find(params[:id])
    if @worker.update(worker_params)
    else
      render json: @worker.errors.full_messages, status: 401
    end
  end

  def index
    @workers = Worker.all
  end

  private
  
  def worker_params
    params.require(:worker).permit(:password,
                                   :email,
                                   :description,
                                   :first_name,
                                   :last_name,
                                   :occupation,
                                   :website_url,
                                   :fields_of_interest,
                                   :city)
  end
end
