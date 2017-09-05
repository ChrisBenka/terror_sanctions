 defmodule Terror.TerrorGroupController do
   use Terror.Web, :controller

   alias Terror.TerrorGroup

   def index(conn, _params) do
     terrorgroups = Repo.all(TerrorGroup)
     render(conn, "index.json", terrorgroups: terrorgroups)
   end

   def create(conn, %{"terror_group" => terror_group_params}) do
     changeset = TerrorGroup.changeset(%TerrorGroup{}, terror_group_params)

     case Repo.insert(changeset) do
       {:ok, terror_group} ->
         conn
         |> put_status(:created)
         |> put_resp_header("location", terror_group_path(conn, :show, terror_group))
         |> render("show.json", terror_group: terror_group)
       {:error, changeset} ->
         conn
         |> put_status(:unprocessable_entity)
         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
     end
   end

   def show(conn, %{"id" => id}) do
     terror_group = Repo.get!(TerrorGroup, id)
     render(conn, "show.json", terror_group: terror_group)
   end

   def update(conn, %{"id" => id, "terror_group" => terror_group_params}) do
     terror_group = Repo.get!(TerrorGroup, id)
     changeset = TerrorGroup.changeset(terror_group, terror_group_params)

     case Repo.update(changeset) do
       {:ok, terror_group} ->
         render(conn, "show.json", terror_group: terror_group)
       {:error, changeset} ->
         conn
         |> put_status(:unprocessable_entity)
         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
     end
   end

   def delete(conn, %{"id" => id}) do
     terror_group = Repo.get!(TerrorGroup, id)

      #Here we use delete! (with a bang) because we expect
      #it to always work (and if it does not, it will raise).
     Repo.delete!(terror_group)

     send_resp(conn, :no_content, "")
   end
 end
