defmodule Terror.IndividualNationalityControllerTest do
  use Terror.ConnCase

  alias Terror.IndividualNationality
  @valid_attrs %{nationality: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, individual_nationality_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    individual_nationality = Repo.insert! %IndividualNationality{}
    conn = get conn, individual_nationality_path(conn, :show, individual_nationality)
    assert json_response(conn, 200)["data"] == %{"id" => individual_nationality.id,
      "individual_id" => individual_nationality.individual_id,
      "nationality" => individual_nationality.nationality}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, individual_nationality_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, individual_nationality_path(conn, :create), individual_nationality: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(IndividualNationality, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, individual_nationality_path(conn, :create), individual_nationality: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    individual_nationality = Repo.insert! %IndividualNationality{}
    conn = put conn, individual_nationality_path(conn, :update, individual_nationality), individual_nationality: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(IndividualNationality, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    individual_nationality = Repo.insert! %IndividualNationality{}
    conn = put conn, individual_nationality_path(conn, :update, individual_nationality), individual_nationality: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    individual_nationality = Repo.insert! %IndividualNationality{}
    conn = delete conn, individual_nationality_path(conn, :delete, individual_nationality)
    assert response(conn, 204)
    refute Repo.get(IndividualNationality, individual_nationality.id)
  end
end
