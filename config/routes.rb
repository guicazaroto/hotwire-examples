Rails.application.routes.draw do
  resources :todos
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
  get '/users', to: 'users#index'
end
