defmodule Terror.IndividualController do
  use Terror.Web, :controller

  alias Terror.Individual

  def index(conn, _params) do
    individuals = Repo.preload(Repo.all(Individual),[:individualnationalities,:individuallanguages,:individualidentifications,])
    render(conn, "index.json", individuals: individuals)
  end

  def create(conn,individual_params) do
    get_geo_loc(conn,individual_params)
    test =  %{name: individual_params["name"],location: individual_params["location"],
    date_of_birth: individual_params["date_of_birth"], place_of_birth: individual_params[""],
    report_title: individual_params["report_title"], report: individual_params["report"],
    sources: individual_params["sources"]}    
    # changeset = Individual.changeset(%Individual{}, individual_params)

    # case Repo.insert(changeset) do
    #   {:ok, individual} ->
    #     conn
    #     |> put_status(:created)
    #     |> put_resp_header("location", individual_path(conn, :show, individual))
    #     |> render("show.json", individual: individual)
    #   {:error, changeset} ->
    #     conn
    #     |> put_status(:unprocessable_entity)
    #     |> render(Terror.ChangesetView, "error.json", changeset: changeset)
    # end
  end
  defp get_geo_loc(conn,individual_params) do
    IO.inspect(individual_params)
    HTTPoison.start
    case HTTPoison.get("https://maps.googleapis.com/maps/api/geocode/json",[],
    params: %{address: individual_params["location"],key: "AIzaSyCtHMUj7UBHBI53TIlzNqa4JgninhLrzbk"}) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        json = Poison.decode!(body)
        json = Enum.at(json["results"],0)
        json = json["geometry"]["location"]
        geom = %Geo.Point{ coordinates: {json["lat"], json["lng"]}}
        IO.inspect(geom)
      {:error, changset} ->
        conn
        |> put_status(:unprocessable_entity)
        |>render(Terror.ChangesetView,"error.json",changset: changset)
    end
  end

  def show(conn, %{"id" => id}) do
    individual = Repo.preload(Repo.get!(Individual,id),[:individualnationalities,:individuallanguages,:individualidentifications,])
    IO.puts(inspect(individual.individualidentifications))
    render(conn, "show.json", individual: individual)
  end

  def update(conn, %{"id" => id, "individual" => individual_params}) do
    individual = Repo.get!(Individual, id)
    changeset = Individual.changeset(individual, individual_params)

    case Repo.update(changeset) do
      {:ok, individual} ->
        render(conn, "show.json", individual: individual)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Terror.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    individual = Repo.get!(Individual, id)

    #Here we use delete! (with a bang) because we expect
    #it to always work (and if it does not, it will raise).
    Repo.delete!(individual)

    send_resp(conn, :no_content, "")
  end
end