require 'sinatra'

set :port, 9514

get '/' do
    erb :bootstrap
end
