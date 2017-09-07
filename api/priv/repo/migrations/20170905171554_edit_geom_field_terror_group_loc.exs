defmodule Terror.Repo.Migrations.EditGeomFieldTerrorGroupLoc do
  use Ecto.Migration

  def change do
    alter table(:terrorgrouplocations) do
      modify :geo_locs, {:array,:geometry}
    end
  end
end
