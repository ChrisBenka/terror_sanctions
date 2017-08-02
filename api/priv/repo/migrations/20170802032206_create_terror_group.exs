defmodule Terror.Repo.Migrations.CreateTerrorGroup do
  use Ecto.Migration

  def change do
    create table(:terrorgroups) do
      add :name, :string
      add :place_of_origin, :string
      add :date_of_origin, :date
      add :mission, :text
      add :report_title, :text
      add :report, :text
      add :source, :text

      timestamps()
    end

  end
end
