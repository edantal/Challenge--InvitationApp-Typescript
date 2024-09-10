import React from 'react'

const AddToList = () => {
  return (
    <div className='add-to-list'>
      <input type='text' placeholder='Name' className='add-to-list__input' />
      <input type='text' placeholder='Age' className='add-to-list__input' />
      <input
        type='text'
        placeholder='Image Number'
        className='add-to-list__input'
      />
      <textarea placeholder='Notes' className='add-to-list__input' />
    </div>
  )
}

export default AddToList
