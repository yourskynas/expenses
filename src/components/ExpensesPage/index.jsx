import { useEffect, useState } from "react"
import CostForm from "components/CostForm"
import List from "components/List"
import Calculator from "components/Calculator"
import Example from "components/Chart"

const ExpensesPage = () => {
  let [expenses, setExpenses] = useState([
    {
      date: new Date(2023, 5, 1),
      category: "Развлечения",
      cost: 5000,
    },
    {
      date: new Date(2023, 5, 5),
      category: "Образование",
      cost: 10000,
    },
    {
      date: new Date(2023, 5, 5),
      category: "Еда",
      cost: 3000,
    },
    {
      date: new Date(2023, 5, 9),
      category: "Одежда",
      cost: 4500,
    },
    {
      date: new Date(2023, 5, 16),
      category: "Путешествия",
      cost: 20000,
    },
    {
      date: new Date(2023, 5, 16),
      category: "Еда",
      cost: 5000,
    },
  ])

  const categoriesExpenses = [
    "Еда",
    "Одежда",
    "Образование",
    "Путешествия",
    "Развлечения",
  ]

  const [calcCostCategory, setCalcCostCategory] = useState([
    {
      category: "Развлечения",
      cost: 5000,
    },
    {
      category: "Образование",
      cost: 10000,
    },
    {
      category: "Еда",
      cost: 8000,
    },
    {
      category: "Одежда",
      cost: 4500,
    },
    {
      category: "Путешествия",
      cost: 20000,
    },
    {
      category: "Всего",
      cost: 47500,
    },
  ])

  useEffect(() => {
    const expensesJson = localStorage.getItem("newExpenses")
    expenses = JSON.parse(expensesJson)
  }, [expenses])

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-6/12">
          <Example />
        </div>
        <div className="w-6/12">
          <Calculator calcCostCategory={calcCostCategory} />
        </div>
      </div>

      <CostForm
        categories={categoriesExpenses}
        setMoney={setExpenses}
        expenses={expenses}
        setCalcCostCategory={setCalcCostCategory}
        calcCostCategory={calcCostCategory}
      />

      <List list={expenses} />
    </div>
  )
}

export default ExpensesPage
