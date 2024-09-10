import { useState } from 'react'

import './App.scss'
import List from './components/List'
import AddToList from './components/AddToList'

interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Art Vandelay',
      age: 38,
      img: 'https://i.pravatar.cc/273',
      note: 'string',
    },
    {
      name: 'Kel Varnsen',
      age: 37,
      img: 'https://i.pravatar.cc/274',
      note: 'string',
    },
    {
      name: 'H.E. Pennypacker',
      age: 42,
      img: 'https://i.pravatar.cc/275',
      note: 'string',
    },
  ])

  return (
    <div className='app'>
      <h1>Einladungsliste</h1>
      <div className='container'>
        <List people={people} />
        <AddToList />
      </div>
    </div>
  )
}

export default App
