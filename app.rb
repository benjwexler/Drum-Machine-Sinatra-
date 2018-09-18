require 'sinatra'

set :port, 9513

get '/' do
    erb :bootstrap
end
