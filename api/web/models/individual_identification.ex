defmodule Terror.IndividualIdentification do
  use Terror.Web, :model

  schema "individualidentifications" do
    field :nation, :string
    field :type, :string
    field :identification, :string
    belongs_to :individual, Terror.Individual

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:nation, :type, :id])
    |> validate_required([:nation, :type, :id,:individual_id])
  end
end
