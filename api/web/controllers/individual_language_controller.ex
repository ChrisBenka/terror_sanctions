# defmodule Terror.IndividualLanguageController do
#   use Terror.Web, :controller

#   alias Terror.IndividualLanguage

#   def index(conn, _params) do
#     individuallanguages = Repo.all(IndividualLanguage)
#     render(conn, "index.json", individuallanguages: individuallanguages)
#   end

#   def create(conn, %{"individual_language" => individual_language_params}) do
#     changeset = IndividualLanguage.changeset(%IndividualLanguage{}, individual_language_params)

#     case Repo.insert(changeset) do
#       {:ok, individual_language} ->
#         conn
#         |> put_status(:created)
#         |> put_resp_header("location", individual_language_path(conn, :show, individual_language))
#         |> render("show.json", individual_language: individual_language)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def show(conn, %{"id" => id}) do
#     individual_language = Repo.get!(IndividualLanguage, id)
#     render(conn, "show.json", individual_language: individual_language)
#   end

#   def update(conn, %{"id" => id, "individual_language" => individual_language_params}) do
#     individual_language = Repo.get!(IndividualLanguage, id)
#     changeset = IndividualLanguage.changeset(individual_language, individual_language_params)

#     case Repo.update(changeset) do
#       {:ok, individual_language} ->
#         render(conn, "show.json", individual_language: individual_language)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def delete(conn, %{"id" => id}) do
#     individual_language = Repo.get!(IndividualLanguage, id)

#     # Here we use delete! (with a bang) because we expect
#     # it to always work (and if it does not, it will raise).
#     Repo.delete!(individual_language)

#     send_resp(conn, :no_content, "")
#   end
# end
