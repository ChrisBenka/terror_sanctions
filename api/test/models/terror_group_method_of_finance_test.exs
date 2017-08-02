defmodule Terror.TerrorGroupMethodOfFinanceTest do
  use Terror.ModelCase

  alias Terror.TerrorGroupMethodOfFinance

  @valid_attrs %{method: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = TerrorGroupMethodOfFinance.changeset(%TerrorGroupMethodOfFinance{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = TerrorGroupMethodOfFinance.changeset(%TerrorGroupMethodOfFinance{}, @invalid_attrs)
    refute changeset.valid?
  end
end
