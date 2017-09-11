defmodule Terror.Repo.Migrations.CreateSanctionsRelations do
  use Ecto.Migration

  def change do
    create table(:sanctionbodies) do
      add :name, :string
      add :location, :string
      add :directive, :text
      add :sources, :text
      add :geo_loc, :geometry
      timestamps()
    end
    
    create table(:sanctionsterrorgroups, primary_key: false) do
      add :sanctionbody_id, references(:sanctionbodies, on_delete: :nothing), primary_key: true
      add :terrorgroup_id, references(:terrorgroups, on_delete: :nothing), primary_key: true
      add :program, :string, primary_key: true
      add :start_date, :date
      add :end_date, :date
      add :report, :text
      add :sources, :text
      timestamps()
    end

    create table(:sanctionsindividuals, primary_key: false) do
      add :sanctionbody_id, references(:sanctionbodies, on_delete: :nothing), primary_key: true
      add :individual_id, references(:individuals, on_delete: :nothing), primary_key: true
      add :program, :string, primary_key: true
      add :start_date, :date
      add :end_date, :date
      add :report, :text
      add :sources, :text
      timestamps()
    end
    create index(:sanctionsindividuals, [:individual_id, :sanctionbody_id])
    create index(:sanctionsterrorgroups, [:terrorgroup_id, :sanctionbody_id])
  end
end
