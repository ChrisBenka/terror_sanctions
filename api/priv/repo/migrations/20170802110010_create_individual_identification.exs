defmodule Terror.Repo.Migrations.CreateIndividualIdentification do
  use Ecto.Migration

  def change do
    create table(:individualidentifications,primary_key: false) do
      add :nation, :string,primary_key: true
      add :type, :string
      add :identification, :string, primary_key: true
      add :individual_id, references(:individuals, on_delete: :nothing),primary_key: true

      timestamps()
    end
    create index(:individualidentifications, [:individual_id])

  end
end
