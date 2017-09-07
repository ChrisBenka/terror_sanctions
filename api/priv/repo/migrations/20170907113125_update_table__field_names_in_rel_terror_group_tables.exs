defmodule Terror.Repo.Migrations.UpdateTable_FieldNamesInRelTerrorGroupTables do
  use Ecto.Migration

  def change do
  rename table(:terrorgrouplocations), :terrorgroup_id, to: :terror_group_id
  rename table(:terrorgroupmethodsoffinance), :terrorgroup_id, to: :terror_group_id
  end
end
