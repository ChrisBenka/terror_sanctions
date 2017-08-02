defmodule Terror.Router do
  use Terror.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Terror do
    pipe_through :api
  end
end
