defmodule Terror.TerrorGroupMethodOfFinanceView do
  use Terror.Web, :view

  def render("index.json", %{terrorgroupmethodsoffinance: terrorgroupmethodsoffinance}) do
    %{data: render_many(terrorgroupmethodsoffinance, Terror.TerrorGroupMethodOfFinanceView, "terror_group_method_of_finance.json")}
  end

  def render("show.json", %{terror_group_method_of_finance: terror_group_method_of_finance}) do
    %{data: render_one(terror_group_method_of_finance, Terror.TerrorGroupMethodOfFinanceView, "terror_group_method_of_finance.json")}
  end

  def render("terror_group_method_of_finance.json", %{terror_group_method_of_finance: terror_group_method_of_finance}) do
    %{id: terror_group_method_of_finance.id,
      terrorgroup_id: terror_group_method_of_finance.terrorgroup_id,
      method: terror_group_method_of_finance.method}
  end
end
