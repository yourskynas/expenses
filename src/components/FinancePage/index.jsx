import { useState } from "react"
import CostForm from "components/CostForm"
import List from "components/List"
import Calculator from "components/Calculator"

const FinancePage = () => {
  const [finance, setFinance] = useState([
    {
      date: new Date(2023, 5, 1),
      category: "Заработная плата",
      cost: 190000,
    },
    {
      date: new Date(2023, 5, 5),
      category: "Инвестиционный доход",
      cost: 10000,
    },
    {
      date: new Date(2023, 5, 5),
      category: "Дивиденды",
      cost: 3000,
    },
    {
      date: new Date(2023, 5, 9),
      category: "Заработная плата",
      cost: 45000,
    },
    {
      date: new Date(2023, 5, 16),
      category: "Гонорар",
      cost: 20000,
    },
    {
      date: new Date(2023, 5, 16),
      category: "Дивиденды",
      cost: 5000,
    },
  ])

  const categoriesFinance = [
    "Заработная плата",
    "Гонорар",
    "Дивиденды",
    "Инвестиционный доход",
    "Социальные выплаты",
  ]

  const [calcCostCategory, setCalcCostCategory] = useState([
    {
      category: "Заработная плата",
      cost: 235000,
    },
    {
      category: "Гонорар",
      cost: 20000,
    },
    {
      category: "Дивиденды",
      cost: 8000,
    },
    {
      category: "Инвестиционный доход",
      cost: 10000,
    },
    {
      category: "Социальные выплаты",
      cost: 0,
    },
    {
      category: "Всего",
      cost: 273000,
    },
  ])

  return (
    <div>
      <Calculator calcCostCategory={calcCostCategory} />

      <CostForm
        categories={categoriesFinance}
        setMoney={setFinance}
        expenses={finance}
        setCalcCostCategory={setCalcCostCategory}
        calcCostCategory={calcCostCategory}
      />
      <List list={finance} />
    </div>
  )
}

export default FinancePage
