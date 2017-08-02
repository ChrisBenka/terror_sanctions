# defmodule Terror.TerrorGroupLocationController do
#   use Terror.Web, :controller

#   alias Terror.TerrorGroupLocation

#   def index(conn, _params) do
#     terrorgrouplocations = Repo.all(TerrorGroupLocation)
#     render(conn, "index.json", terrorgrouplocations: terrorgrouplocations)
#   end

#   def create(conn, %{"terror_group_location" => terror_group_location_params}) do
#     changeset = TerrorGroupLocation.changeset(%TerrorGroupLocation{}, terror_group_location_params)

#     case Repo.insert(changeset) do
#       {:ok, terror_group_location} ->
#         conn
#         |> put_status(:created)
#         |> put_resp_header("location", terror_group_location_path(conn, :show, terror_group_location))
#         |> render("show.json", terror_group_location: terror_group_location)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def show(conn, %{"id" => id}) do
#     terror_group_location = Repo.get!(TerrorGroupLocation, id)
#     render(conn, "show.json", terror_group_location: terror_group_location)
#   end

#   def update(conn, %{"id" => id, "terror_group_location" => terror_group_location_params}) do
#     terror_group_location = Repo.get!(TerrorGroupLocation, id)
#     changeset = TerrorGroupLocation.changeset(terror_group_location, terror_group_location_params)

#     case Repo.update(changeset) do
#       {:ok, terror_group_location} ->
#         render(conn, "show.json", terror_group_location: terror_group_location)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def delete(conn, %{"id" => id}) do
#     terror_group_location = Repo.get!(TerrorGroupLocation, id)

#      #Here we use delete! (with a bang) because we expect
#      #it to always work (and if it does not, it will raise).
#     Repo.delete!(terror_group_location)

#     send_resp(conn, :no_content, "")
#   end
# end
