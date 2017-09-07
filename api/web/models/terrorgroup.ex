defmodule Terror.Terrorgroup do
  use Terror.Web, :model

  schema "terrorgroups" do
    field :name, :string
    field :place_of_origin, :string
    field :date_of_origin, Ecto.Date
    field :mission, :string
    field :report_title, :string
    field :report, :string
    field :sources, :string
    has_many :locations, Terror.TerrorgroupLocation
    has_many :methodsoffinance, Terror.TerrorgroupMethodoffinance
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :place_of_origin, :date_of_origin, :mission, :report_title, :report, :sources])
    |> validate_required([:name, :place_of_origin, :date_of_origin, :mission, :report_title, :report, :sources])
    |> unique_constraint(:report_title)
  end

end
