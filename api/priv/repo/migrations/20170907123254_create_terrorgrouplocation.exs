defmodule Terror.Repo.Migrations.CreateTerrorgrouplocation do
  use Ecto.Migration

  def change do
    create table(:terrorgrouplocations) do
      add :country, :string
      add :geocodes, {:array, :string}
      add :terrorgroup_id, references(:terrorgroups, on_delete: :nothing)

      timestamps()
    end

    create index(:terrorgrouplocations, [:terrorgroup_id])
  end
end
