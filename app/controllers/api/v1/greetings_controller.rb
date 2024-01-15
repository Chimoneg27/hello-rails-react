class Api::V1::GreetingsController < Api::V1::BaseController
  def random_greeting
    random_greeting = Greeting.order('RANDOM()').first
    render json: { greeting: random_greeting&.message }
  end
end
