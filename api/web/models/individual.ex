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
    field :geo_loc, Geo.Point
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
    |> cast(params, [:name, :location, :date_of_birth, :date_of_death, :place_of_birth, :report_title, :report, :sources, :individualnationalities, :individualidentifications, :langindividuallanguagesuages])
    |> validate_required([:name, :location, :date_of_birth, :report_title, :report, :sources, :individualnationalities, :individuallanguages, :individualidentifications])
    |> unique_constraint(:report_title)
    |> put_geo_location()

  end
  defp put_geo_location(changeset) do
    put_change(changeset,:geo_loc,get_geocodes(changeset.location))
  end
  defp get_geocodes(location) do
    HTTPoison.get!("https://maps.googleapis.com/maps/api/geocode/json",[],params: %{address: location,key: "AIzaSyCtHMUj7UBHBI53TIlzNqa4JgninhLrzbk"})
  end 
end
