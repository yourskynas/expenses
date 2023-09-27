import { useEffect, useState } from "react"
import Button from "components/Button"

const CostForm = ({ setMoney, expenses, categories, setCalcCostCategory, calcCostCategory }) => {
  const [category, setCategory] = useState(categories[1])
  const [cost, setCost] = useState("")

  const newExpense = {
    date: new Date(),
    category,
    cost: cost,
  }
  let newExpenses = [...expenses, newExpense]

  const costTypeNumber = parseInt(cost)
  
  let allCost =
    calcCostCategory[0].cost +
    calcCostCategory[1].cost +
    calcCostCategory[2].cost +
    calcCostCategory[3].cost +
    calcCostCategory[4].cost +
    costTypeNumber
  console.log(allCost)

  const elements = calcCostCategory.map((item, i) => {
    if (newExpense.category === item.category) {
      let newPrice = item.cost + costTypeNumber
      return { ...item, cost: newPrice }
    } else if (i === 5) {
      return { ...item, cost: allCost }
    } else {
      return item
    }
  })

  const onClick = (event) => {
    event.preventDefault()
    
    setMoney(newExpenses)

    setCost("")
    setCategory(categories[1])
    setCalcCostCategory(elements)
  }

  useEffect(() => {
    localStorage.setItem("newExpenses", JSON.stringify(newExpenses))
  }, [newExpenses])

  return (
    <div>
      <form className="grid grid-cols-5 gap-4 px-4 py-5">
        <input
          onChange={(event) => setCost(event.target.value)}
          value={cost}
          name="cost"
          type="text"
          placeholder="00.00"
          className="col-span-2 bg-white rounded-md border shadow-inner border-gray-300 p-2 focus:outline-none focus:border-2 focus:border-purple-600"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="text-gray-600 col-span-2 bg-white rounded-md border shadow-inner border-gray-300 p-2 focus:outline-none focus:border-2 focus:border-purple-600"
        >
          {categories.map((category) => (
            <option key={category} className="bg-purple-100">
              {category}
            </option>
          ))}
        </select>
        <Button title="Добавить" onClick={onClick} type="submit" />
      </form>
    </div>
  )
}

export default CostForm
