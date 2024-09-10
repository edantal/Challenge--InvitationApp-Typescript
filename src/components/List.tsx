import Card from './Card'

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
    return people.map(person => <Card person={person} />)
  }

  return <ul className='list'>{renderList()}</ul>
}

export default List
