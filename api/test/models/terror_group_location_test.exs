defmodule Terror.TerrorGroupLocationTest do
  use Terror.ModelCase

  alias Terror.TerrorGroupLocation

  @valid_attrs %{location: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = TerrorGroupLocation.changeset(%TerrorGroupLocation{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = TerrorGroupLocation.changeset(%TerrorGroupLocation{}, @invalid_attrs)
    refute changeset.valid?
  end
end
