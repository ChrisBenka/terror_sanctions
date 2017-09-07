defmodule Terror.TerrorgroupController do
  use Terror.Web, :controller

  alias Terror.Terrorgroup

  def index(conn, _params) do
    terrorgroups = Repo.preload(Repo.all(Terrorgroup),[:locations,:methodsoffinance])
    IO.inspect(terrorgroups)
    render(conn, "index.json", terrorgroups: terrorgroups)
  end

end