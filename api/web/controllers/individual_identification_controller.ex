# defmodule Terror.IndividualIdentificationController do
#   use Terror.Web, :controller

#   alias Terror.IndividualIdentification

#   def index(conn, _params) do
#     individualidentifications = Repo.all(IndividualIdentification)
#     render(conn, "index.json", individualidentifications: individualidentifications)
#   end

#   def create(conn, %{"individual_identification" => individual_identification_params}) do
#     changeset = IndividualIdentification.changeset(%IndividualIdentification{}, individual_identification_params)

#     case Repo.insert(changeset) do
#       {:ok, individual_identification} ->
#         conn
#         |> put_status(:created)
#         |> put_resp_header("location", individual_identification_path(conn, :show, individual_identification))
#         |> render("show.json", individual_identification: individual_identification)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def show(conn, %{"id" => id}) do
#     individual_identification = Repo.get!(IndividualIdentification, id)
#     render(conn, "show.json", individual_identification: individual_identification)
#   end

#   def update(conn, %{"id" => id, "individual_identification" => individual_identification_params}) do
#     individual_identification = Repo.get!(IndividualIdentification, id)
#     changeset = IndividualIdentification.changeset(individual_identification, individual_identification_params)

#     case Repo.update(changeset) do
#       {:ok, individual_identification} ->
#         render(conn, "show.json", individual_identification: individual_identification)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def delete(conn, %{"id" => id}) do
#     individual_identification = Repo.get!(IndividualIdentification, id)

#     # Here we use delete! (with a bang) because we expect
#     # it to always work (and if it does not, it will raise).
#     Repo.delete!(individual_identification)

#     send_resp(conn, :no_content, "")
#   end
# end
