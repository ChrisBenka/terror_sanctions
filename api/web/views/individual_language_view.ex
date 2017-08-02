defmodule Terror.IndividualLanguageView do
  use Terror.Web, :view

  def render("index.json", %{individuallanguages: individuallanguages}) do
    %{data: render_many(individuallanguages, Terror.IndividualLanguageView, "individual_language.json")}
  end

  def render("show.json", %{individual_language: individual_language}) do
    %{data: render_one(individual_language, Terror.IndividualLanguageView, "individual_language.json")}
  end

  def render("individual_language.json", %{individual_language: individual_language}) do
    %{id: individual_language.id,
      individual_id: individual_language.individual_id,
      language: individual_language.language}
  end
end
