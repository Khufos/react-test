import React from 'react'

const Card = ({name,ImageUrl, }) => {
  return (
    <>
    <div className=''>
        <div className='image-container'>
        <img src={`/perfil_classes/${ImageUrl}`} alt="wow" />
        </div>
        <div className='card-name'>
          {name}
        </div>
    </div>
    </>
  )
}

export default Card