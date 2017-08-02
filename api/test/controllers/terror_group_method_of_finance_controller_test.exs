defmodule Terror.TerrorGroupMethodOfFinanceControllerTest do
  use Terror.ConnCase

  alias Terror.TerrorGroupMethodOfFinance
  @valid_attrs %{method: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, terror_group_method_of_finance_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    terror_group_method_of_finance = Repo.insert! %TerrorGroupMethodOfFinance{}
    conn = get conn, terror_group_method_of_finance_path(conn, :show, terror_group_method_of_finance)
    assert json_response(conn, 200)["data"] == %{"id" => terror_group_method_of_finance.id,
      "terrorgroup_id" => terror_group_method_of_finance.terrorgroup_id,
      "method" => terror_group_method_of_finance.method}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, terror_group_method_of_finance_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, terror_group_method_of_finance_path(conn, :create), terror_group_method_of_finance: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(TerrorGroupMethodOfFinance, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, terror_group_method_of_finance_path(conn, :create), terror_group_method_of_finance: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    terror_group_method_of_finance = Repo.insert! %TerrorGroupMethodOfFinance{}
    conn = put conn, terror_group_method_of_finance_path(conn, :update, terror_group_method_of_finance), terror_group_method_of_finance: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(TerrorGroupMethodOfFinance, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    terror_group_method_of_finance = Repo.insert! %TerrorGroupMethodOfFinance{}
    conn = put conn, terror_group_method_of_finance_path(conn, :update, terror_group_method_of_finance), terror_group_method_of_finance: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    terror_group_method_of_finance = Repo.insert! %TerrorGroupMethodOfFinance{}
    conn = delete conn, terror_group_method_of_finance_path(conn, :delete, terror_group_method_of_finance)
    assert response(conn, 204)
    refute Repo.get(TerrorGroupMethodOfFinance, terror_group_method_of_finance.id)
  end
end
