defmodule Terror.Repo.Migrations.DropTerrorTables do
  use Ecto.Migration

  def change do
        drop table(:terrorgrouplocations)
        drop table(:terrorgroupmethodsoffinances)

    drop table(:terrorgroups)
  end
end
