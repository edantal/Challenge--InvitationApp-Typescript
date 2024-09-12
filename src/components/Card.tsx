import { RiCalendarCheckFill, RiCalendarCloseFill } from '@remixicon/react'

interface IProps {
  person: {
    name: string
    phone: number
    img: string
    note?: string
    confirmed?: boolean
  }
}

const Card: React.FC<IProps> = ({ person }) => {
  return (
    <li className='list__item'>
      <div className='list__header'>
        <img
          src={`https://i.pravatar.cc/${person.img}`}
          alt={person.name}
          className='list__img'
        />
        <h2 className='list__name'>{person.name}</h2>
      </div>
      <p>{person.phone}</p>
      <p className='list__note'>{person.note}</p>
      <p className={`check ${person.confirmed && 'confirmed'}`}>
        {person.confirmed ? <RiCalendarCheckFill /> : <RiCalendarCloseFill />}
      </p>
    </li>
  )
}

export default Card
