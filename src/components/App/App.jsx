import { useState } from 'react';
import CostForm from '../costForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    {
      date:'1 июня 2023',
      category:'Развлечения',
      cost: 5000
    },
    {
      date:'5 июня 2023',
      category:'Образование',
      cost: 10000
    },
    {
      date:'5 июня 2023',
      category:'Еда',
      cost: 3000
    },
    {
      date:'9 июня 2023',
      category:'Одежда',
      cost: 4500
    },
    {
      date:'16 июня 2023',
      category:'Путешествия',
      cost: 20000
    },
    {
      date:'16 июня 2023',
      category:'Еда',
      cost: 5000
    }
  ])


  return (
    <div className='mx-auto max-w-3xl bg-gray-50 my-10 py-10 shadow rounded-md'>
      <h1 className='font-extrabold text-3xl text-center py-10'>Учет расходов</h1>
      <CostForm />
      {expenses.map((expense) => {
        return (
          <div className='flex justify-between py-2 mx-5 border-b border-gray-300 text-gray-600 items-stretch'>
            <div className='flex flex-col w-2/12'>
              <p className='rounded-full px-1 text-center text-xs bg-blue-200 text-purple-700'>{expense.date}</p>
              <p>{expense.category}</p>
            </div>
            <div>
              <p>- {expense.cost},00 ₽</p>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
