defmodule Terror.Repo.Migrations.ChangingDateToYearRemovingReportTitleTerrorGroup do
  use Ecto.Migration

  def change do
    alter table(:terrorgroups) do
      remove :date_of_origin
      add :year_of_origin, :integer
      remove :report_title
    end
    create unique_index(:terrorgroups, [:name])
  end
end
