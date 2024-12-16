import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = () => {
  return (
    <div className='box'> A
      <ComponentB />
    </div>
  )
}

export default ComponentA;
