import ElementOrnament from './svg/ElementOrnament'

const AddToList = () => {
  return (
    <div className='add-to-list'>
      <ElementOrnament />
      <input type='text' placeholder='Name' className='add-to-list__input' />
      <input type='text' placeholder='Age' className='add-to-list__input' />
      <input
        type='text'
        placeholder='Image Number'
        className='add-to-list__input'
      />
      <textarea placeholder='Notes' className='add-to-list__textarea' />
    </div>
  )
}

export default AddToList
