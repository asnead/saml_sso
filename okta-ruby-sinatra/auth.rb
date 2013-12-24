require 'sinatra'
require 'sinatra/config_file'
require 'omniauth'
require 'omniauth-saml'
require 'securerandom'

config_file 'config.yml'

enable :sessions
set :session_secret, ENV['SECRET_TOKEN'] || SecureRandom.hex

use OmniAuth::Builder do
  provider :saml,
  :assertion_consumer_service_url     => settings.auth['service_url'],
  :issuer                             => "http://localhost:4567",
  :idp_sso_target_url                 => settings.auth['target_url'],
  :idp_cert_fingerprint               => settings.auth['fingerprint'],
  :name_identifier_format             => "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
end

helpers do
  def protected!
    return if authorized?
    redirect to('/auth/saml')
  end

  def authorized?
    !session[:user_id].nil?
  end
end
