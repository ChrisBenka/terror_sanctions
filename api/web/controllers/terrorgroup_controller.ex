defmodule Terror.TerrorgroupController do
  use Terror.Web, :controller

  alias Terror.Terrorgroup

  def index(conn, _params) do
    terrorgroups = Repo.preload(Repo.all(Terrorgroup),[:methodsoffinance,:locations])
    render(conn, "index.json", terrorgroups: terrorgroups)
  end
   def show(conn, %{"id" => id}) do
    terrorgroup = Repo.preload(Repo.get!(Terrorgroup,id),[:methodsoffinance,:locations])
    render(conn, "show.json", terrorgroup: terrorgroup)
  end
end