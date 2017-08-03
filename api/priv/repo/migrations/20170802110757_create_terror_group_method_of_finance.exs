defmodule Terror.Repo.Migrations.CreateTerrorGroupMethodOfFinance do
  use Ecto.Migration

  def change do
    create table(:terrorgroupmethodsoffinance,primary_key: false) do
      add :method, :string, primary_key: true
      add :terrorgroup_id, references(:terrorgroups, on_delete: :nothing), primary_key: true

      timestamps()
    end
    create index(:terrorgroupmethodsoffinance, [:terrorgroup_id])

  end
end
