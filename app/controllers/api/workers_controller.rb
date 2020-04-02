class Api::WorkersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      sign_in!(@worker)
      render json: @worker
    else
      render json: @worker.errors.full_messages, status: 401
    end
  end

  def show
    @worker = worker.find(params[:id])
    render json: @worker
  end

  def update
    @worker = worker.find(params[:id])
    if @worker.update(worker_params)
            render json: @worker
    else
      render json: @worker.errors.full_messages, status: 401
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
