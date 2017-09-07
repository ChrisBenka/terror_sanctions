defmodule Terror.Repo.Migrations.CreateTerrorGroupMethods do
  use Ecto.Migration

  def change do
    create table(:terrorgroupmethodoffinances, primary_key: false) do
      add :method, :string, primary_key: true
      add :terrorgroup_id, references(:terrorgroups, on_delete: :nothing), primary_key: true

      timestamps()
    end
    create index(:terrorgroupmethodoffinances, [:terrorgroup_id])
  end
end
