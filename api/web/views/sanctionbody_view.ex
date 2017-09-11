defmodule Terror.SanctionbodyView do
  use Terror.Web, :view

  def render("index.json", %{sanctionbodies: sanctionbodies}) do
    %{data: render_many(sanctionbodies, Terror.SanctionbodyView, "sanctionbody.json")}
  end

  def render("show.json", %{sanctionbody: sanctionbody}) do
    %{data: render_one(sanctionbody, Terror.SanctionbodyView, "sanctionbody.json")}
  end

  def render("sanctionbody.json", %{sanctionbody: sanctionbody}) do
    %{id: sanctionbody.id,
      name: sanctionbody.name,
      location: sanctionbody.location,
      directive: sanctionbody.directive,
      sources: sanctionbody.sources,
      geo_loc: sanctionbody.geo_loc,
      sanctioned_individuals: sanctionbody.individuals,
      sanctioned_terrorgroups: sanctionbody.terrorgroups
    }
  end
end
