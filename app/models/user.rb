class User < ActiveRecord::Base
  has_many :reservations
  has_secure_password
  validates :username, :presence => true, :uniqueness => true
end
