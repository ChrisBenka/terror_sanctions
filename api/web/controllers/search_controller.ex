defmodule Terror.SearchController do
  use Terror.Web, :controller

  alias Terror.Individual
  alias Terror.Sanctionbody
  alias Terror.Terrorgroup
  alias Terror.SanctionsIndividual
  alias Terror.SanctionsTerrorgroup

  def search(conn, _params) do
    IO.inspect(_params)
  end

  
end