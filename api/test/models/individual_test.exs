defmodule Terror.IndividualTest do
  use Terror.ModelCase

  alias Terror.Individual

  @valid_attrs %{date_of_birth: %{day: 17, month: 4, year: 2010}, date_of_death: %{day: 17, month: 4, year: 2010}, identifications: %{}, languages: [], location: "some content", name: "some content", nationalities: [], place_of_birth: "some content", report: "some content", report_title: "some content", sources: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Individual.changeset(%Individual{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Individual.changeset(%Individual{}, @invalid_attrs)
    refute changeset.valid?
  end
end
