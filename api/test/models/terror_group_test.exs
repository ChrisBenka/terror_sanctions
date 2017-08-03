defmodule Terror.TerrorGroupTest do
  use Terror.ModelCase

  alias Terror.TerrorGroup

  @valid_attrs %{date_of_origin: %{day: 17, month: 4, year: 2010}, mission: "some content", name: "some content", place_of_origin: "some content", report: "some content", report_title: "some content", source: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = TerrorGroup.changeset(%TerrorGroup{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = TerrorGroup.changeset(%TerrorGroup{}, @invalid_attrs)
    refute changeset.valid?
  end
end
