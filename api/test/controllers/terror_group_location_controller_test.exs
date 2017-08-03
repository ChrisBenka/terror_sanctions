defmodule Terror.TerrorGroupLocationControllerTest do
  use Terror.ConnCase

  alias Terror.TerrorGroupLocation
  @valid_attrs %{location: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, terror_group_location_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    terror_group_location = Repo.insert! %TerrorGroupLocation{}
    conn = get conn, terror_group_location_path(conn, :show, terror_group_location)
    assert json_response(conn, 200)["data"] == %{"id" => terror_group_location.id,
      "terrorgroup_id" => terror_group_location.terrorgroup_id,
      "location" => terror_group_location.location}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, terror_group_location_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, terror_group_location_path(conn, :create), terror_group_location: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(TerrorGroupLocation, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, terror_group_location_path(conn, :create), terror_group_location: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    terror_group_location = Repo.insert! %TerrorGroupLocation{}
    conn = put conn, terror_group_location_path(conn, :update, terror_group_location), terror_group_location: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(TerrorGroupLocation, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    terror_group_location = Repo.insert! %TerrorGroupLocation{}
    conn = put conn, terror_group_location_path(conn, :update, terror_group_location), terror_group_location: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    terror_group_location = Repo.insert! %TerrorGroupLocation{}
    conn = delete conn, terror_group_location_path(conn, :delete, terror_group_location)
    assert response(conn, 204)
    refute Repo.get(TerrorGroupLocation, terror_group_location.id)
  end
end
