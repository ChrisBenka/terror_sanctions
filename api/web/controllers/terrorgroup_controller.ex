defmodule Terror.TerrorgroupController do
  use Terror.Web, :controller

  alias Terror.Terrorgroup
  alias Terror.TerrorgroupMethodoffinance

  def index(conn, _params) do
    terrorgroups = Repo.preload(Repo.all(Terrorgroup),[:methodsoffinance,:locations])
    render(conn, "index.json", terrorgroups: terrorgroups)
  end
  def show(conn, %{"id" => id}) do
    terrorgroup = Repo.preload(Repo.get!(Terrorgroup,id),[:methodsoffinance,:locations])
    render(conn, "show.json", terrorgroup: terrorgroup)
  end
  def create(conn, terrorgroup_params) do
    terrorgroup = %{name: terrorgroup_params["name"], place_of_origin: terrorgroup_params["place_of_origin"],
    date_of_origin: terrorgroup_params["date_of_origin"], mission: terrorgroup_params["mission"],
    report_title: terrorgroup_params["report_title"], report: terrorgroup_params["report"],
    sources: terrorgroup_params["sources"]}

    changeset = Terrorgroup.changeset(%Terrorgroup{},terrorgroup)
    
    methodsOfFinances = String.split(terrorgroup_params["methodsoffinance"],",")
    locations = String.split(terrorgroup_params["locations"],",")

    case Repo.insert(changeset) do
      {:ok, terrorgroup} -> 
        terrorgroup = Repo.preload(Repo.get(Terrorgroup, terrorgroup.id),[:locations,:methodsoffinance])
        for methodOfFinance <- methodsOfFinances, do: build_terrorgroup_method_of_finance(methodOfFinance,terrorgroup.id)
        #for location <- locations, do: build_terror_group_location(location,terrorgroup)
      conn
      |> put_status(:created)
      |> render("show.json", terrorgroup: terrorgroup)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Terror.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def build_terrorgroup_method_of_finance(method,terrorgroup_id) do
    method_changeset = TerrorgroupMethodoffinance.changeset(%TerrorgroupMethodoffinance{},%{terrorgroup_id: terrorgroup_id, method: method})
    IO.inspect(method_changeset)
  end

end



    # field :name, :string
    # field :place_of_origin, :string
    # field :date_of_origin, Ecto.Date
    # field :mission, :string
    # field :report_title, :string
    # field :report, :string
    # field :sources, :string
    # has_many :locations, Terror.TerrorgroupLocation
    # has_many :methodsoffinance, Terror.TerrorgroupMethodoffinance
    # timestamps()
