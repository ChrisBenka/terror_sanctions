defmodule Terror.TerrorgroupView do
  use Terror.Web, :view

  def render("index.json", %{terrorgroups: terrorgroups}) do
    %{data: render_many(terrorgroups, Terror.TerrorgroupView, "terrorgroup.json")}
  end

  def render("show.json", %{individual: individual}) do
    %{data: render_one(individual, Terror.IndividualView, "terrorgroup.json")}
  end

  def render("terrorgroup.json", %{terrorgroup: terrorgroup}) do
    %{id: terrorgroup.id,
      name: terrorgroup.name,
      date_of_origin: terrorgroup.date_of_origin,
      mission: terrorgroup.mission,
      report_title: terrorgroup.report_title,
      report: terrorgroup.report,
      sources: terrorgroup.sources,
      methodsoffinance: terrorgroup.methodsoffinance
    }
  end
end
