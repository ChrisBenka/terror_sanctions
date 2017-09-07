defmodule Terror.TerrorgrouplocationTest do
  use Terror.ModelCase

  alias Terror.Terrorgrouplocation

  @valid_attrs %{country: "some country", geocodes: []}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Terrorgrouplocation.changeset(%Terrorgrouplocation{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Terrorgrouplocation.changeset(%Terrorgrouplocation{}, @invalid_attrs)
    refute changeset.valid?
  end
end
