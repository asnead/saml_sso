require 'sinatra'
require './auth'

set :bind, '0.0.0.0'
set :port, 4567

get '/' do
  protected!
  "Hello " + session[:user_id]
end

post '/auth/:name/callback' do
  auth = request.env['omniauth.auth']
  session[:user_id] = auth[:uid]
  redirect to("/")
end
