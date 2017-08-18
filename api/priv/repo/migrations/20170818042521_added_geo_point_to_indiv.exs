defmodule Terror.Repo.Migrations.AddedGeoPointToIndiv do
  use Ecto.Migration

  def change do
    alter table(:individuals) do
      add :geo_loc, :geometry
    end

  end
end
