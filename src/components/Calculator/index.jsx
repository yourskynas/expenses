const Calculator = ({ calcCostCategory }) => {
  return (
    <div className="py-1 mx-5 text-gray-900 flex flex-col">
      {calcCostCategory.map((c, i) => {
        if (i === 1) {
          return (
            <div className="flex shadow rounded-full bg-yellow-200 text-yellow-800 px-2 py-1">
              <p>{c.category}</p>
              <p>- {c.cost},00 ₽</p>
            </div>
          )
        } else if (i === 4) {
          return (
            <div className="flex text-blue-400 px-2 py-1">
              <p>{c.category}</p>
              <p>- {c.cost},00 ₽</p>
            </div>
          )
        } else if (i === 2) {
          return (
            <div className="flex text-red-800 px-2 py-1">
              <p>{c.category}</p>
              <p>- {c.cost},00 ₽</p>
            </div>
          )
        } else if (i === 3) {
          return (
            <div className="flex text-green-700 px-2 py-1">
              <p>{c.category}</p>
              <p>- {c.cost},00 ₽</p>
            </div>
          )
        } else if (i === 5) {
          return (
            <div className="flex bg-gray-200 shadow rounded-full px-2 py-1">
              <p>{c.category}</p>
              <p>- {c.cost},00 ₽</p>
            </div>
          )
        } else {
          return (
            <div className="flex px-2 py-1">
              <p>{c.category}</p>
              <p>- {c.cost},00 ₽</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Calculator
