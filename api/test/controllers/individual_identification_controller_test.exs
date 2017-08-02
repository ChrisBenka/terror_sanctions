defmodule Terror.IndividualIdentificationControllerTest do
  use Terror.ConnCase

  alias Terror.IndividualIdentification
  @valid_attrs %{id: "some content", nation: "some content", type: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, individual_identification_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    individual_identification = Repo.insert! %IndividualIdentification{}
    conn = get conn, individual_identification_path(conn, :show, individual_identification)
    assert json_response(conn, 200)["data"] == %{"id" => individual_identification.id,
      "individual_id" => individual_identification.individual_id,
      "nation" => individual_identification.nation,
      "type" => individual_identification.type,
      "id" => individual_identification.id}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, individual_identification_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, individual_identification_path(conn, :create), individual_identification: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(IndividualIdentification, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, individual_identification_path(conn, :create), individual_identification: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    individual_identification = Repo.insert! %IndividualIdentification{}
    conn = put conn, individual_identification_path(conn, :update, individual_identification), individual_identification: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(IndividualIdentification, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    individual_identification = Repo.insert! %IndividualIdentification{}
    conn = put conn, individual_identification_path(conn, :update, individual_identification), individual_identification: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    individual_identification = Repo.insert! %IndividualIdentification{}
    conn = delete conn, individual_identification_path(conn, :delete, individual_identification)
    assert response(conn, 204)
    refute Repo.get(IndividualIdentification, individual_identification.id)
  end
end
