defmodule Terror.IndividualNationality do
  use Terror.Web, :model
  
  @primary_key false
    @derive {Poison.Encoder, only: [:nationality]}

  schema "individualnationalities" do
    field :nationality, :string, primary_key: true
    belongs_to :individual, Terror.Individual, primary_key: true

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:nationality])
    |> validate_required([:nationality,:individual_id])
  end
end
