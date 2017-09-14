defmodule Terror.SanctionbodyController do
  use Terror.Web, :controller

  alias Terror.Sanctionbody
  alias Terror.SanctionsIndividual
  alias Terror.SanctionsTerrorgroup


  def index(conn, _params) do
    IO.puts("hit")
    sanctionbodies = Repo.preload(Repo.all(Sanctionbody),[:individuals,:terrorgroups])
    render(conn, "index.json", sanctionbodies: sanctionbodies)
  end
  
end
