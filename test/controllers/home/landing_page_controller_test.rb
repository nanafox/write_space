require "test_helper"

class Home::LandingPageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_landing_page_index_url
    assert_response :success
  end
end
