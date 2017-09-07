defmodule Terror.TerrorgroupTest do
  use Terror.ModelCase

  alias Terror.Terrorgroup

  @valid_attrs %{date_of_origin: ~D[2010-04-17], mission: "some mission", name: "some name", place_of_origin: "some place_of_origin", report: "some report", report_title: "some report_title", sources: "some sources"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Terrorgroup.changeset(%Terrorgroup{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Terrorgroup.changeset(%Terrorgroup{}, @invalid_attrs)
    refute changeset.valid?
  end
end
