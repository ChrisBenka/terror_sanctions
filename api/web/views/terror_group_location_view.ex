defmodule Terror.TerrorGroupLocationView do
  use Terror.Web, :view

  def render("index.json", %{terrorgrouplocations: terrorgrouplocations}) do
    %{data: render_many(terrorgrouplocations, Terror.TerrorGroupLocationView, "terror_group_location.json")}
  end

  def render("show.json", %{terror_group_location: terror_group_location}) do
    %{data: render_one(terror_group_location, Terror.TerrorGroupLocationView, "terror_group_location.json")}
  end

  def render("terror_group_location.json", %{terror_group_location: terror_group_location}) do
    %{id: terror_group_location.id,
      terrorgroup_id: terror_group_location.terrorgroup_id,
      location: terror_group_location.location}
  end
end
