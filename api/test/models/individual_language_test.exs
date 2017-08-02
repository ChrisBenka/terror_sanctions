defmodule Terror.IndividualLanguageTest do
  use Terror.ModelCase

  alias Terror.IndividualLanguage

  @valid_attrs %{language: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = IndividualLanguage.changeset(%IndividualLanguage{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = IndividualLanguage.changeset(%IndividualLanguage{}, @invalid_attrs)
    refute changeset.valid?
  end
end
