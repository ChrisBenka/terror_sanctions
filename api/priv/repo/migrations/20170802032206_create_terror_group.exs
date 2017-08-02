defmodule Terror.Repo.Migrations.CreateTerrorGroup do
  use Ecto.Migration

  def change do
    create table(:terrorgroups) do
      add :name, :string, null: false
      add :place_of_origin, :string, null: false
      add :date_of_origin, :date, null: false
      add :mission, :text, null: false
      add :report_title, :text, null: false
      add :report, :text,null: false
      add :sources, :text,null: false

      timestamps()
    end
    create unique_index(:terrorgroups, [:report_title])

  end
end
