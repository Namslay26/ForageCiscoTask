import React from 'react'

export default function Component(props) {
  return (
    <div className=' shadow-md shadow-indigo-300'>
      <div>
        <h1 className=' font-semibold text-3xl'>
          {props.title}
        </h1>
        {props.children}
      </div>
    </div>
  )
}
