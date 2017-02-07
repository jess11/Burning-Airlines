class UsersController < ApplicationController
  # before_action :check_if_logged_in #need to add what user can do
  # before_action :check_if_admin #need to add what admin can do

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save  #checking for validity
      session[:user_id] = @user.id #signing up also signs you in
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username,:password, :password_confirmation)
  end

end
