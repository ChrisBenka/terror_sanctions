defmodule Terror.IndividualIdentificationView do
  use Terror.Web, :view

  def render("index.json", %{individualidentifications: individualidentifications}) do
    %{data: render_many(individualidentifications, Terror.IndividualIdentificationView, "individual_identification.json")}
  end

  def render("show.json", %{individual_identification: individual_identification}) do
    %{data: render_one(individual_identification, Terror.IndividualIdentificationView, "individual_identification.json")}
  end

  def render("individual_identification.json", %{individual_identification: individual_identification}) do
    %{id: individual_identification.id,
      individual_id: individual_identification.individual_id,
      nation: individual_identification.nation,
      type: individual_identification.type,
      id: individual_identification.id}
  end
end
