defmodule Terror.IndividualControllerTest do
  use Terror.ConnCase

  alias Terror.Individual
  @valid_attrs %{date_of_birth: %{day: 17, month: 4, year: 2010}, date_of_death: %{day: 17, month: 4, year: 2010}, identifications: %{}, languages: [], location: "some content", name: "some content", nationalities: [], place_of_birth: "some content", report: "some content", report_title: "some content", sources: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, individual_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    individual = Repo.insert! %Individual{}
    conn = get conn, individual_path(conn, :show, individual)
    assert json_response(conn, 200)["data"] == %{"id" => individual.id,
      "name" => individual.name,
      "location" => individual.location,
      "date_of_birth" => individual.date_of_birth,
      "date_of_death" => individual.date_of_death,
      "place_of_birth" => individual.place_of_birth,
      "report_title" => individual.report_title,
      "report" => individual.report,
      "sources" => individual.sources,
      "nationalities" => individual.nationalities,
      "identifications" => individual.identifications,
      "languages" => individual.languages}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, individual_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, individual_path(conn, :create), individual: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Individual, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, individual_path(conn, :create), individual: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    individual = Repo.insert! %Individual{}
    conn = put conn, individual_path(conn, :update, individual), individual: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Individual, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    individual = Repo.insert! %Individual{}
    conn = put conn, individual_path(conn, :update, individual), individual: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    individual = Repo.insert! %Individual{}
    conn = delete conn, individual_path(conn, :delete, individual)
    assert response(conn, 204)
    refute Repo.get(Individual, individual.id)
  end
end
