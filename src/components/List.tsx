import React from 'react'

interface IProps {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map(person => (
      <li className='list'>
        <div className='list__header'>
          <img src={person.img} alt={person.name} className='list__img' />
          <h2 className='list__name'>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className='list__note'>{person.note}</p>
      </li>
    ))
  }

  return <ul>{renderList()}</ul>
}

export default List
