defmodule Terror.IndividualLanguage do
  use Terror.Web, :model
  @primary_key false
  schema "individuallanguages" do
    field :language, :string, primary_key: true
    belongs_to :individual, Terror.Individual, primary_key: true

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:language])
    |> validate_required([:language,:individual_id])
  end
end
