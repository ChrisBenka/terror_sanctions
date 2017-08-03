defmodule Terror.IndividualLanguageControllerTest do
  use Terror.ConnCase

  alias Terror.IndividualLanguage
  @valid_attrs %{language: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, individual_language_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    individual_language = Repo.insert! %IndividualLanguage{}
    conn = get conn, individual_language_path(conn, :show, individual_language)
    assert json_response(conn, 200)["data"] == %{"id" => individual_language.id,
      "individual_id" => individual_language.individual_id,
      "language" => individual_language.language}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, individual_language_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, individual_language_path(conn, :create), individual_language: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(IndividualLanguage, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, individual_language_path(conn, :create), individual_language: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    individual_language = Repo.insert! %IndividualLanguage{}
    conn = put conn, individual_language_path(conn, :update, individual_language), individual_language: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(IndividualLanguage, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    individual_language = Repo.insert! %IndividualLanguage{}
    conn = put conn, individual_language_path(conn, :update, individual_language), individual_language: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    individual_language = Repo.insert! %IndividualLanguage{}
    conn = delete conn, individual_language_path(conn, :delete, individual_language)
    assert response(conn, 204)
    refute Repo.get(IndividualLanguage, individual_language.id)
  end
end
