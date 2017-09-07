defmodule Terror.Repo.Migrations.DropTerrorTables do
  use Ecto.Migration

  def change do
    drop table(:terrorgrouplocations)
        drop table(:terrorgroupmethodsoffinance)

    drop table(:terrorgroups)
  end
end
