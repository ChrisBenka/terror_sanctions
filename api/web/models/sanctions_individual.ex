defmodule Terror.SanctionsIndividual do
  use Terror.Web, :model
  
  @primary_key false
  schema "sanctionsindividuals" do
    belongs_to :individual, Terror.Individual, primary_key: true
		belongs_to :sanctionbody, Terror.Sanctionbody, primary_key: true
		field :program, :string, primary_key: true
		field :start_date, Ecto.Date
		field :end_date, Ecto.Date
		field :report, :string
		field :sources, :string
  end


  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:program, :start_date, :end_date, :report, :sources, :individual_id, :sanctionbody_id])
    |> validate_required([:program, :start_date, :report, :sources, :individual_id, :sanctionbody_id])
  end

end
