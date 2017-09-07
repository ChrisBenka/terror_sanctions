defmodule Terror.TerrorGroupMethod do
  use Terror.Web, :view

  def render("index.json", %{terrorgroupmethods: terrorgroupmethods}) do
    %{data: render_many(terrorgroupmethods, Terror.TerrorGroupMethod, "terrorgroup_method.json")}
  end

  def render("show.json", %{terrorgroup_method: terrorgroup_method}) do
    %{data: render_one(terrorgroup_method, Terror.TerrorGroupMethod, "terrorgroup_method.json")}
  end

  def render("terrorgroup_method.json", %{terrorgroup_method: terrorgroup_method}) do
    %{ 
      method: terrorgroup_method.method,
    }
  end
end
