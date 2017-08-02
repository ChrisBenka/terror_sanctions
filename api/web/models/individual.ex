defmodule Terror.Individual do
  use Terror.Web, :model

  schema "individuals" do
    field :name, :string
    field :location, :string
    field :date_of_birth, Ecto.Date
    field :date_of_death, Ecto.Date
    field :place_of_birth, :string
    field :report_title, :string
    field :report, :string
    field :sources, :string
    has_many :individualnationalities, Terror.IndividualNationality
    has_many :individuallanguages, Terror.IndividualLanguage
    has_many :individualidentifications, Terror.IndividualIdentification
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :location, :date_of_birth, :date_of_death, :place_of_birth, :report_title, :report, :sources, :nationalities, :identifications, :languages])
    |> validate_required([:name, :location, :date_of_birth, :report_title, :report, :sources, :individualnationalities, :individuallanguages, :individualidentifications])
    |> unique_constraint(:report_title)

  end
end
