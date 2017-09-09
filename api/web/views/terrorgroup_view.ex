defmodule Terror.TerrorgroupView do
  use Terror.Web, :view

  def render("index.json", %{terrorgroups: terrorgroups}) do
    %{data: render_many(terrorgroups, Terror.TerrorgroupView, "terrorgroup.json")}
  end

  def render("show.json", %{terrorgroup: terrorgroup}) do
    %{data: render_one(terrorgroup, Terror.TerrorgroupView, "terrorgroup.json")}
  end

  def render("terrorgroup.json", %{terrorgroup: terrorgroup}) do
    %{id: terrorgroup.id,
      name: terrorgroup.name,
      year_of_origin: terrorgroup.year_of_origin,
      mission: terrorgroup.mission,
      report: terrorgroup.report,
      sources: terrorgroup.sources,
      methods: terrorgroup.methodsoffinance,
      locations: terrorgroup.locations
    }
  end
end
