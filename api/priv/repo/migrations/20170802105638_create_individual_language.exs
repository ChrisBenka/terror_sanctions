defmodule Terror.Repo.Migrations.CreateIndividualLanguage do
  use Ecto.Migration

  def change do
    create table(:individuallanguages,primary_key: false) do
      add :language, :string, primary_key: true
      add :individual_id, references(:individuals, on_delete: :nothing), primary_key: true

      timestamps()
    end
    create index(:individuallanguages, [:individual_id])

  end
end
