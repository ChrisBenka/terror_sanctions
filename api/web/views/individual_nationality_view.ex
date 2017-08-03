defmodule Terror.IndividualNationalityView do
  use Terror.Web, :view

  def render("index.json", %{individualnationalities: individualnationalities}) do
    %{data: render_many(individualnationalities, Terror.IndividualNationalityView, "individual_nationality.json")}
  end

  def render("show.json", %{individual_nationality: individual_nationality}) do
    %{data: render_one(individual_nationality, Terror.IndividualNationalityView, "individual_nationality.json")}
  end

  def render("individual_nationality.json", %{individual_nationality: individual_nationality}) do
    %{id: individual_nationality.id,
      individual_id: individual_nationality.individual_id,
      nationality: individual_nationality.nationality}
  end
end
