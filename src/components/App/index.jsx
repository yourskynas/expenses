import "./App.css"
import Header from "components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ExpensesPage from "components/ExpensesPage"
import FinancePage from "components/FinancePage"

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-3xl bg-gray-50 my-10 py-10 shadow rounded-md">
        <Header />
        <Routes>
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/finance" element={<FinancePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
