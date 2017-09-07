defmodule Terror.Repo.Migrations.CreateTerrorGroupLocTable do
  use Ecto.Migration

  def change do
    create table(:terrorgrouplocations, primary_key: false) do
      add :country, :string, primary_key: true
      add :geocodes, {:array,:string}, primary_key: true
      add :terrorgroup_id, references(:terrorgroups, on_delete: :nothing), primary_key: true

      timestamps()
    end
    create index(:terrorgrouplocations, [:terrorgroup_id])
  end
end
