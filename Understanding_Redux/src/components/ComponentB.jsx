import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className='box' > B
      <ComponentC />
    </div>
  )
}

export default ComponentB
