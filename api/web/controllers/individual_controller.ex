defmodule Terror.IndividualController do
  use Terror.Web, :controller

  alias Terror.Individual

  def index(conn, _params) do
    individuals = Repo.all(Individual)
    render(conn, "index.json", individuals: individuals)
  end

  def create(conn, %{"individual" => individual_params}) do
    changeset = Individual.changeset(%Individual{}, individual_params)

    case Repo.insert(changeset) do
      {:ok, individual} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", individual_path(conn, :show, individual))
        |> render("show.json", individual: individual)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Terror.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    #individual = Repo.get!(Individual, id)
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
