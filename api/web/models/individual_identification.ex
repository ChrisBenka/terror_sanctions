defmodule Terror.IndividualIdentification do
  use Terror.Web, :model
  @primary_key false
  @derive {Poison.Encoder, only: [:nation, :type, :identification]}
  schema "individualidentifications" do
    field :nation, :string, primary_key: true
    field :type, :string, primary_key: true
    field :identification, :string, primary_key: true
    belongs_to :individual, Terror.Individual, primary_key: true

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:nation, :type, :identification, :individual_id])
    |> validate_required([:nation, :type, :identification,:individual_id])
  end
end
