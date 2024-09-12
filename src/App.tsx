import { useState } from 'react'

import './App.scss'
import List from './components/List'
import AddToList from './components/AddToList'
import TitleOrnament from './components/svg/TitleOrnament'
import Footer from './components/Footer'

export interface IState {
  people: {
    name: string
    phone: number
    img: string
    note?: string
    confirmed?: boolean
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Art Vandelay',
      phone: +491668995623,
      img: '273',
      note: 'Architect',
      confirmed: true,
    },
    {
      name: 'Kel Varnsen',
      phone: +491668995623,
      img: '274',
      note: 'Advantage, Varnsen!',
      confirmed: false,
    },
    {
      name: 'H.E. Pennypacker',
      phone: +491668995623,
      img: '275',
      note: 'Who is watching the Saab factory?',
      confirmed: false,
    },
    {
      name: 'Dr. Van Nostrand',
      phone: +491668995623,
      img: '276',
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
        <AddToList people={people} setPeople={setPeople} />
      </div>
      <Footer />
    </div>
  )
}

export default App
