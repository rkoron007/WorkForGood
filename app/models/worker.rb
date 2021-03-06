class Worker < ActiveRecord::Base
  validates :description, :name, :last_name, :occupation, :city, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  validates :session_token, :email, presence: true, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    worker = Worker.find_by(email: email)

    return nil if worker.nil?
    worker.is_password?(password) ? worker : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end