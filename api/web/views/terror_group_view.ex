defmodule Terror.TerrorGroupView do
  use Terror.Web, :view

  def render("index.json", %{terrorgroups: terrorgroups}) do
    %{data: render_many(terrorgroups, Terror.TerrorGroupView, "terror_group.json")}
  end

  def render("show.json", %{terror_group: terror_group}) do
    %{data: render_one(terror_group, Terror.TerrorGroupView, "terror_group.json")}
  end

  def render("terror_group.json", %{terror_group: terror_group}) do
    %{id: terror_group.id,
      name: terror_group.name,
      place_of_origin: terror_group.place_of_origin,
      date_of_origin: terror_group.date_of_origin,
      mission: terror_group.mission,
      report_title: terror_group.report_title,
      report: terror_group.report,
      source: terror_group.source}
  end
end
