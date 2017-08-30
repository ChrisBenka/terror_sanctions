defmodule Terror.IndividualController do
  use Terror.Web, :controller

  alias Terror.Individual

  def index(conn, _params) do
    individuals = Repo.preload(Repo.all(Individual),[:individualnationalities,:individuallanguages,:individualidentifications,])
    render(conn, "index.json", individuals: individuals)
  end

  def create(conn,individual_params) do
    geo_location = get_geo_loc(conn,individual_params)
    individual =  %{name: individual_params["name"],location: individual_params["location"],
    date_of_birth: individual_params["date_of_birth"], place_of_birth: individual_params["place_of_birth"],
    report_title: individual_params["report_title"], report: individual_params["report"],
    sources: individual_params["sources"], geo_loc: geo_location}    
    changeset = Individual.changeset(%Individual{},individual)
    nationalities = String.split(individual_params["individualnationalities"],",")
    case Repo.insert(changeset) do
      {:ok, individual} ->
        individual = Repo.preload(Repo.get(Individual,individual.id),[:individualnationalities,:individuallanguages,:individualidentifications,] )
        for nationality <- nationalities, do: build_individual_nationality(nationality,individual.id)
        if individual_params["individualidentifications"] do
          identifications = String.split(individual_params["individualidentifications"],";")
          for identification <- identifications, do: build_individaul_identifications(identification,individual.id)
        end 
        conn
        |> put_status(:created)
        > render("show.json", individual: individual)
      {:error, changeset} ->
       conn
       |> put_status(:unprocessable_entity)
       |> render(Terror.ChangesetView, "error.json", changeset: changeset)
    end
  end
  
  defp get_geo_loc(conn,individual_params) do
    HTTPoison.start
    case HTTPoison.get("https://maps.googleapis.com/maps/api/geocode/json",[],
    params: %{address: individual_params["place_of_birth"],key: "AIzaSyCtHMUj7UBHBI53TIlzNqa4JgninhLrzbk"}) do
      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        json = Poison.decode!(body)
        json = Enum.at(json["results"],0)
        json = json["geometry"]["location"]
        geom = %Geo.Point{ coordinates: {json["lat"], json["lng"]}}
        geom
      {:error, changset} ->
        conn
        |> put_status(:unprocessable_entity)
        |>render(Terror.ChangesetView,"error.json",changset: changset)
    end
  end

  defp build_individual_nationality(nationality,individual_id) do
    nationality_changeset = Terror.IndividualNationality.changeset(%Terror.IndividualNationality{},%{individual_id: individual_id, nationality: nationality})
    Repo.insert(nationality_changeset)
  end
  defp build_individaul_identifications(id,individual_id) do
    id = String.split(id,",")
    identification_changeset = Terror.IndividualIdentification.changeset(%Terror.IndividualIdentification{},%{nation: Enum.at(id,0),
    type: Enum.at(id,1), identification: Enum.at(id,2), individual_id: individual_id})
    Repo.insert(identification_changeset)
  end

  def show(conn, %{"id" => id}) do
    individual = Repo.preload(Repo.get!(Individual,id),[:individualnationalities,:individuallanguages,:individualidentifications,])
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