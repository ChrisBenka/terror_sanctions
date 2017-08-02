#defmodule Terror.IndividualNationalityController do
#  use Terror.Web, :controller

#  alias Terror.IndividualNationality

#  def index(conn, _params) do
#    individualnationalities = Repo.all(IndividualNationality)
#    render(conn, "index.json", individualnationalities: individualnationalities)
#  end

#  def create(conn, %{"individual_nationality" => individual_nationality_params}) do
#    changeset = IndividualNationality.changeset(%IndividualNationality{}, individual_nationality_params)

#    case Repo.insert(changeset) do
#      {:ok, individual_nationality} ->
#        conn
#        |> put_status(:created)
#        |> put_resp_header("location", individual_nationality_path(conn, :show, individual_nationality))
#        |> render("show.json", individual_nationality: individual_nationality)
#      {:error, changeset} ->
#        conn
#        |> put_status(:unprocessable_entity)
#        |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#    end
#  end

#  def show(conn, %{"id" => id}) do
#    individual_nationality = Repo.get!(IndividualNationality, id)
#    render(conn, "show.json", individual_nationality: individual_nationality)
#  end

#  def update(conn, %{"id" => id, "individual_nationality" => individual_nationality_params}) do
#    individual_nationality = Repo.get!(IndividualNationality, id)
#    changeset = IndividualNationality.changeset(individual_nationality, individual_nationality_params)

#    case Repo.update(changeset) do
#      {:ok, individual_nationality} ->
#        render(conn, "show.json", individual_nationality: individual_nationality)
#      {:error, changeset} ->
#        conn
#        |> put_status(:unprocessable_entity)
#        |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#    end
#  end

#  def delete(conn, %{"id" => id}) do
#    individual_nationality = Repo.get!(IndividualNationality, id)

#    # Here we use delete! (with a bang) because we expect
#    # it to always work (and if it does not, it will raise).
#    Repo.delete!(individual_nationality)

#    send_resp(conn, :no_content, "")
#  end
#end
