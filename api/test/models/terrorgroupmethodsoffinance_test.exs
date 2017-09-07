defmodule Terror.TerrorgroupmethodsoffinanceTest do
  use Terror.ModelCase

  alias Terror.Terrorgroupmethodsoffinance

  @valid_attrs %{method: "some method"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Terrorgroupmethodsoffinance.changeset(%Terrorgroupmethodsoffinance{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Terrorgroupmethodsoffinance.changeset(%Terrorgroupmethodsoffinance{}, @invalid_attrs)
    refute changeset.valid?
  end
end
