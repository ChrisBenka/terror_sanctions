defmodule Terror.Repo.Migrations.CreateTerrorgroupmethodsoffinance do
  use Ecto.Migration

  def change do
    create table(:terrorgroupmethodsoffinances) do
      add :method, :string
      add :terrorgroup_id, references(:terrorgroups, on_delete: :nothing)

      timestamps()
    end

    create index(:terrorgroupmethodsoffinances, [:terrorgroup_id])
  end
end
