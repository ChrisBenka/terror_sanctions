defmodule Terror.TerrorGroup do
  use Terror.Web, :model

  schema "terrorgroups" do
    field :name, :string
    field :place_of_origin, :string
    field :date_of_origin, Ecto.Date
    field :mission, :string
    field :report_title, :string
    field :report, :string
    field :source, :string
    has_many :terrorgroupmethodsoffinance, Terror.TerrorGroupMethodOfFinance
    has_many :terrorgrouplocations, Terror.TerrorGroupLocation

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :place_of_origin, :date_of_origin, :mission, :report_title, :report, :source])
    |> validate_required([:name, :place_of_origin, :date_of_origin, :mission, :report_title, :report, :source])
  end
end
