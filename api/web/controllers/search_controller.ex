defmodule Terror.SearchController do
  import Ecto.Query

  use Terror.Web, :controller

  alias Terror.Individual
  alias Terror.Sanctionbody
  alias Terror.Terrorgroup
  alias Terror.SanctionsIndividual
  alias Terror.SanctionsTerrorgroup

  def search(conn, _params) do
    searchQuery = from terror_group in "terrorgroups"
                  where: like(terror_group.name,_params.query) or like(terror_group.) 
  end

  
end