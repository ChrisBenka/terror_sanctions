defmodule Terror.TerrorGroupControllerTest do
  use Terror.ConnCase

  alias Terror.TerrorGroup
  @valid_attrs %{date_of_origin: %{day: 17, month: 4, year: 2010}, mission: "some content", name: "some content", place_of_origin: "some content", report: "some content", report_title: "some content", source: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, terror_group_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    terror_group = Repo.insert! %TerrorGroup{}
    conn = get conn, terror_group_path(conn, :show, terror_group)
    assert json_response(conn, 200)["data"] == %{"id" => terror_group.id,
      "name" => terror_group.name,
      "place_of_origin" => terror_group.place_of_origin,
      "date_of_origin" => terror_group.date_of_origin,
      "mission" => terror_group.mission,
      "report_title" => terror_group.report_title,
      "report" => terror_group.report,
      "source" => terror_group.source}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, terror_group_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, terror_group_path(conn, :create), terror_group: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(TerrorGroup, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, terror_group_path(conn, :create), terror_group: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    terror_group = Repo.insert! %TerrorGroup{}
    conn = put conn, terror_group_path(conn, :update, terror_group), terror_group: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(TerrorGroup, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    terror_group = Repo.insert! %TerrorGroup{}
    conn = put conn, terror_group_path(conn, :update, terror_group), terror_group: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    terror_group = Repo.insert! %TerrorGroup{}
    conn = delete conn, terror_group_path(conn, :delete, terror_group)
    assert response(conn, 204)
    refute Repo.get(TerrorGroup, terror_group.id)
  end
end
