defmodule Terror.Repo.Migrations.AddGeomLocArrayToTerrorGroupLoc do
  use Ecto.Migration

 def change do
    alter table(:terrorgrouplocations) do
      add :geo_locs, {:array, :geometry}
    end
end
end