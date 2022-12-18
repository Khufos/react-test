import React from 'react'

const Itemleft = (props) => {
  return (
      <div className='item-left'>
        <div className='item-slot '>
          <a target="_blank" href={`http://wotlk.cavernoftime.com/item=${props.h_head}`} 
          rel={`item=${props.h_head}&amp;ench=${props.h_ench}&amp;gems=${props.h_gema_one}:${props.h_gema_two}:0`}>
            <img src={`http://cdn.warmane.com/wotlk/icons/large/${props.h_foto}`} width="50" height="50" />
          </a>
        </div>
      </div>
  )
}

export default Itemleft