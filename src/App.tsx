import React, { useState } from 'react'
import './App.css'

interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([])

  return (
    <div className='App'>
      <h1>Einladungsliste</h1>
    </div>
  )
}

export default App
