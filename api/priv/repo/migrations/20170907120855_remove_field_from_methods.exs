defmodule Terror.Repo.Migrations.RemoveFieldFromMethods do
  use Ecto.Migration

  def change do
    drop index(:terrorgroupmethodsoffinance, [:terrorgroup_id])
  end
end
