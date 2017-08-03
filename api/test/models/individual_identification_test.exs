defmodule Terror.IndividualIdentificationTest do
  use Terror.ModelCase

  alias Terror.IndividualIdentification

  @valid_attrs %{id: "some content", nation: "some content", type: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = IndividualIdentification.changeset(%IndividualIdentification{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = IndividualIdentification.changeset(%IndividualIdentification{}, @invalid_attrs)
    refute changeset.valid?
  end
end
