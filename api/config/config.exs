# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :terror,
  ecto_repos: [Terror.Repo]

# Configures the endpoint
config :terror, Terror.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "6fY+HM0cDpovQeQ87JPQeRT0xz98X+AkJ5HodpLemLqBGjaMS2ZkWZg1NHjZ+IXE",
  render_errors: [view: Terror.ErrorView, accepts: ~w(json)],
  pubsub: [name: Terror.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :guardian, Guardian,
  issuer: "Sling",
  ttl: {30, :days},
  verify_issuer: true,
  serializer: Sling.GuardianSerializer,
  secret_key: "TjHK6tfDkO5/qKD+u9tFfTIhbKe3q1Vm9fpbne6hzPoGESEh/9R7ytwJBykgF5H+"


# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
