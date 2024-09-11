import Card from './Card'
import ElementOrnament from './svg/ElementOrnament'
import { IState as IProps } from '../App'

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
