import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { useEffect } from "react"

const List = ({ list }) => {

  return (
    <div>
      {list.map((l) => {
        const date = format(l.date, "d MMMM yyyy", { locale: ru })
        return (
          <div className="flex justify-between py-2 mx-5 border-b border-gray-300 text-gray-600 items-stretch">
            <div className="flex flex-col w-2/12">
              <p className="rounded-full px-1 text-center text-xs bg-blue-200 text-purple-700">
                {date}
              </p>
              <p>{l.category}</p>
            </div>
            <div>
              <p>- {l.cost},00 ₽</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
