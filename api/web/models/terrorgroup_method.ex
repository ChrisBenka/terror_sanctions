defmodule Terror.TerrorgroupMethodoffinance do
  use Terror.Web, :model
  
  @primary_key false
    @derive {Poison.Encoder, only: [:nationality]}

  schema "terrorgroupmethodoffinances" do
    field :method, :string, primary_key: true
    belongs_to :terrorgroup, Terror.Terrorgroup, primary_key: true

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:method])
    |> validate_required([:nationality])
  end
end
