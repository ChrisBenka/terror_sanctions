defmodule Terror.Repo.Migrations.CreateIndividual do
  use Ecto.Migration

  def change do
    create table(:individuals) do
      add :name, :string, null: false
      add :location, :string, null: false
      add :date_of_birth, :date, null: false
      add :date_of_death, :date
      add :place_of_birth, :string
      add :report_title, :text, null: false
      add :report, :text, null: false
      add :sources, :text, null: false

      timestamps()
    end
    create unique_index(:individuals, [:report_title])

  end
end
