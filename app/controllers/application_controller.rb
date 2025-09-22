class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # allow_browser versions: :modern

  def authenticated?
    rodauth(:user).rails_account.present?
  end
  helper_method :authenticated?
end
