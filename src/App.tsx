import { useState } from 'react'

import './App.scss'
import List from './components/List'
import AddToList from './components/AddToList'
import TitleOrnament from './components/svg/TitleOrnament'
import Footer from './components/Footer'

interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
    confirmed?: boolean
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Art Vandelay',
      age: +491668995623,
      img: 'https://i.pravatar.cc/273',
      note: 'Architect',
      confirmed: true,
    },
    {
      name: 'Kel Varnsen',
      age: +491668995623,
      img: 'https://i.pravatar.cc/274',
      note: 'Advantage, Varnsen!',
      confirmed: false,
    },
    {
      name: 'H.E. Pennypacker',
      age: +491668995623,
      img: 'https://i.pravatar.cc/275',
      note: 'Who is watching the Saab factory?',
      confirmed: false,
    },
    {
      name: 'Dr. Van Nostrand',
      age: +491668995623,
      img: 'https://i.pravatar.cc/276',
      note: 'From the Hofermandorf clinic in Belgium, the Netherlands?',
      confirmed: true,
    },
  ])

  return (
    <div className='app'>
      <h1 className='app__title'>
        Einladungsliste <TitleOrnament />
      </h1>
      <div className='container'>
        <List people={people} />
        <AddToList />
      </div>
      <Footer />
    </div>
  )
}

export default App
