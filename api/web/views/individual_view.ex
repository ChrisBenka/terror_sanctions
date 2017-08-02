defmodule Terror.IndividualView do
  use Terror.Web, :view

  def render("index.json", %{individuals: individuals}) do
    %{data: render_many(individuals, Terror.IndividualView, "individual.json")}
  end

  def render("show.json", %{individual: individual}) do
    %{data: render_one(individual, Terror.IndividualView, "individual.json")}
  end

  def render("individual.json", %{individual: individual}) do
    %{id: individual.id,
      name: individual.name,
      location: individual.location,
      date_of_birth: individual.date_of_birth,
      date_of_death: individual.date_of_death,
      place_of_birth: individual.place_of_birth,
      report_title: individual.report_title,
      report: individual.report,
      sources: individual.sources,
      nationalities: individual.nationalities,
      identifications: individual.identifications,
      languages: individual.languages}
  end
end
