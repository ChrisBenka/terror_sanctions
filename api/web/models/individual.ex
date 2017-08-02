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
    field :nationalities, {:array, :string}
    field :identifications, :map
    field :languages, {:array, :string}

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :location, :date_of_birth, :date_of_death, :place_of_birth, :report_title, :report, :sources, :nationalities, :identifications, :languages])
    |> validate_required([:name, :location, :date_of_birth, :date_of_death, :place_of_birth, :report_title, :report, :sources, :nationalities, :identifications, :languages])
  end
end
