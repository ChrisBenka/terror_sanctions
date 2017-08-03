defmodule Terror.IndividualNationalityTest do
  use Terror.ModelCase

  alias Terror.IndividualNationality

  @valid_attrs %{nationality: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = IndividualNationality.changeset(%IndividualNationality{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = IndividualNationality.changeset(%IndividualNationality{}, @invalid_attrs)
    refute changeset.valid?
  end
end
