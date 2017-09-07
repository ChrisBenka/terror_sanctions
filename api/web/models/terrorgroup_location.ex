defmodule Terror.TerrorgroupLocation do
  use Terror.Web, :model
  
  @primary_key false
    @derive {Poison.Encoder, only: [:country,:geocodes]}

  schema "terrorgrouplocations" do
    field :country, :string, primary_key: true
    field :geocodes, {:array,:string}, primary_key: true
    belongs_to :terrorgroup, Terror.Terrorgroup, primary_key: true

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:country,:geocodes])
    |> validate_required([:country,:geocodes])
  end
end
