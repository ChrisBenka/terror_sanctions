defmodule Terror.TerrorGroupMethodOfFinance do
  use Terror.Web, :model
  @primary_key false
  schema "terrorgroupmethodsoffinance" do
    field :method, :string, primary_key: true
    belongs_to :terrorgroup, Terror.Terrorgroup, primary_key: true
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:method,:terrorgroup_id])
    |> validate_required([:method,:terrorgroup_id])
  end
end
