import Card from './Card'
import ElementOrnament from './svg/ElementOrnament'

interface IProps {
  people: {
    name: string
    age: number
    img: string
    note?: string
    confirmed?: boolean
  }[]
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map(person => <Card person={person} />)
  }

  return (
    <ul className='list'>
      <ElementOrnament />
      <li className='list__heading'>
        <p>Name des Gastes</p>
        <p>Telefonnummer</p>
        <p>Anmerkung</p>
        <p>Bestätigt</p>
      </li>
      {renderList()}
    </ul>
  )
}

export default List
