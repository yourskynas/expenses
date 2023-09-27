import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="flex justify-center py-10">
      <Link to={"/expenses"} className="font-extrabold text-3xl cursor-pointer">
        Учет расходов
      </Link>

      <div className="border-l-4 border-gray-300 mx-3"></div>

      <Link to={"finance"} className="font-extrabold text-3xl cursor-pointer">
        Учет доходов
      </Link>
    </div>
  )
}

export default Header
