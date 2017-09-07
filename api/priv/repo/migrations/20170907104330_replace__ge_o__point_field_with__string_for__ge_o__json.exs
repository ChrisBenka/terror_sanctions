defmodule Terror.Repo.Migrations.Replace_GEO_PointFieldWith_StringFor_GEO_Json do
  use Ecto.Migration

  def change do
    alter table(:terrorgrouplocations) do
      modify :geo_locs, {:array,:string}
      end
  end
end
