import { useState } from 'react';
import Button from '../Button';

const categories = ['Еда', 'Аренда', 'Одежда', 'Образование', 'Путешествия', 'Развлечения']

const CostForm = () => {
    const [category, setCategory] = useState(categories[1])
    const [cost, setCost] = useState('')

    const onClick = (event) => {
      event.preventDefault()
      const newExpense = {
        category,
        cost
      }
      console.log(newExpense)
      setCost('')
      setCategory(categories[1])
    }

    return (
        <div>
        <form className='grid grid-cols-5 gap-4 px-4 py-5'>
          <input
              onChange={(event) => setCost(event.target.value)}
              value={cost}
              name='cost'
              type='text'
              placeholder='00.00'
              className='col-span-2 bg-white rounded-md border shadow-inner border-gray-300 p-2 focus:outline-none focus:border-2 focus:border-purple-600'
          />
          <select 
              value={category}
              onChange={event => setCategory(event.target.value)}
              className='text-gray-600 col-span-2 bg-white rounded-md border shadow-inner border-gray-300 p-2 focus:outline-none focus:border-2 focus:border-purple-600'
          >
              {categories.map(category => (
                  <option key={category} className='bg-purple-100'>{category}</option>
                ))}
          </select>
          <Button title='Добавить' onClick={onClick} type='submit' />
        </form>
      </div>
    )
}

export default CostForm