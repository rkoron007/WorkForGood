class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    if (params[:worker]) 
      @user = Worker.find_by_credentials(
        params[:worker][:email],
        params[:worker][:password]
      )
    else 
      @user = Company.find_by_credentials(
        params[:company][:email],
        params[:company][:password]
      )
    end
    
    if @user
      sign_in!(@user)
      show = params[:worker] ? 'api/workers/show.json.jbuilder' : 'api/companies/show.json.jbuilder' 
      render show
    else
      render json: ['Invalid email or email. Please Try Again!'], status: 401
    end
  end

 def destroy
  @user = current_user
    if @user
      sign_out!
      render json: ["Logged Out Successfully"], status: 404
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
