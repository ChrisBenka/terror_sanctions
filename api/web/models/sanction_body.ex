defmodule Terror.Sanctionbody do
  use Terror.Web, :model

  schema "sanctionbodies" do
    field :name, :string
    field :location, :string
    field :directive, :string
    field :sources, :string
    field :geo_loc, Geo.Point
    
    many_to_many :individuals,Terror.Individual, join_through: Terror.SanctionsIndividual
    many_to_many :terrorgroups, Terror.Terrorgroup, join_through: Terror.SanctionsTerrorgroup
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :location, :directive, :sources ])
    |> validate_required([:name, :location, :directive, :sources])
    |> unique_constraint(:name)
  end

end
