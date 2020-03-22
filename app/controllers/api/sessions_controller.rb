class Api::SessionsController < ApplicationController
  # before_action :require_signed_out!, only: [:new, :create]
  # before_action :require_signed_in!, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in!(@user)
    else
      render json: ['Invalid email or email. Please Try Again!'], status: 401
    end
  end

  def destroy
    sign_out!
  end
end
