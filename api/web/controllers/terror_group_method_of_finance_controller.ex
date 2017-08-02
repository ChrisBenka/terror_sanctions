# defmodule Terror.TerrorGroupMethodOfFinanceController do
#   use Terror.Web, :controller

#   alias Terror.TerrorGroupMethodOfFinance

#   def index(conn, _params) do
#     terrorgroupmethodsoffinance = Repo.all(TerrorGroupMethodOfFinance)
#     render(conn, "index.json", terrorgroupmethodsoffinance: terrorgroupmethodsoffinance)
#   end

#   def create(conn, %{"terror_group_method_of_finance" => terror_group_method_of_finance_params}) do
#     changeset = TerrorGroupMethodOfFinance.changeset(%TerrorGroupMethodOfFinance{}, terror_group_method_of_finance_params)

#     case Repo.insert(changeset) do
#       {:ok, terror_group_method_of_finance} ->
#         conn
#         |> put_status(:created)
#         |> put_resp_header("location", terror_group_method_of_finance_path(conn, :show, terror_group_method_of_finance))
#         |> render("show.json", terror_group_method_of_finance: terror_group_method_of_finance)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def show(conn, %{"id" => id}) do
#     terror_group_method_of_finance = Repo.get!(TerrorGroupMethodOfFinance, id)
#     render(conn, "show.json", terror_group_method_of_finance: terror_group_method_of_finance)
#   end

#   def update(conn, %{"id" => id, "terror_group_method_of_finance" => terror_group_method_of_finance_params}) do
#     terror_group_method_of_finance = Repo.get!(TerrorGroupMethodOfFinance, id)
#     changeset = TerrorGroupMethodOfFinance.changeset(terror_group_method_of_finance, terror_group_method_of_finance_params)

#     case Repo.update(changeset) do
#       {:ok, terror_group_method_of_finance} ->
#         render(conn, "show.json", terror_group_method_of_finance: terror_group_method_of_finance)
#       {:error, changeset} ->
#         conn
#         |> put_status(:unprocessable_entity)
#         |> render(Terror.ChangesetView, "error.json", changeset: changeset)
#     end
#   end

#   def delete(conn, %{"id" => id}) do
#     terror_group_method_of_finance = Repo.get!(TerrorGroupMethodOfFinance, id)

#      #Here we use delete! (with a bang) because we expect
#      #it to always work (and if it does not, it will raise).
#     Repo.delete!(terror_group_method_of_finance)

#     send_resp(conn, :no_content, "")
#   end
# end
