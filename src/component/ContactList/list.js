import React, { useState } from 'react'
import Card from '../ContactCard/Card';

const list = (props) => {
  const data = props.contact;
  return (
    <div className='container' >
      <h4>{props.title}</h4>

      {data.map((element) => {
        return <>
          <Card data={element}/>
        </>
      })}
    </div>
  )
}

export default list
