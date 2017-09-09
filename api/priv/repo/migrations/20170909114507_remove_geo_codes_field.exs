defmodule Terror.Repo.Migrations.RemoveGeoCodesField do
  use Ecto.Migration

  def change do
    alter table(:terrorgrouplocations) do
      remove :geocodes
    end
  end
end
