defmodule Terror.TerrorGroupLocation do
  use Terror.Web, :model

  @primary_key false
  schema "terrorgrouplocations" do
    field :location, :string, primary_key: true
    field :geo_locs, {:array, :string}
    belongs_to :terrorgroup, Terror.Terrorgroup, primary_key: true

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:location, :geo_locs,:terrorgroup_id])
    |> validate_required([:location,:terrorgroup_id])
  end
end
