import { useState } from 'react'
import ElementOrnament from './svg/ElementOrnament'
import { IState as Props } from '../App'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    img: '',
    note: '',
    confirmed: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) return

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        img: input.img,
        note: input.note,
      },
    ])

    setInput({
      name: '',
      age: '',
      img: '',
      note: '',
      confirmed: false,
    })
  }

  return (
    <div className='add-to-list'>
      <ElementOrnament />
      <h2>Einen Gast hinzufügen</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        className='add-to-list__input'
        value={input.name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Age'
        name='age'
        className='add-to-list__input'
        value={input.age}
        onChange={handleChange}
      />
      <input
        type='text'
        name='img'
        placeholder='Image Number'
        className='add-to-list__input'
        value={input.img}
        onChange={handleChange}
      />
      <textarea
        placeholder='Note'
        name='note'
        className='add-to-list__textarea'
        value={input.note}
        onChange={handleChange}
      />
      <button className='add-to-list__btn' onClick={handleClick}>
        Zur Liste hinzufügen
      </button>
    </div>
  )
}

export default AddToList
