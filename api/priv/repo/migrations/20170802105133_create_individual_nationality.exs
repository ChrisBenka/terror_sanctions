defmodule Terror.Repo.Migrations.CreateIndividualNationality do
  use Ecto.Migration

  def change do
    create table(:individualnationalities, primary_key: false) do
      add :nationality, :string, primary_key: true
      add :individual_id, references(:individuals, on_delete: :nothing), primary_key: true

      timestamps()
    end
    create index(:individualnationalities, [:individual_id])

  end
end
