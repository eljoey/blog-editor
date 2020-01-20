import React from 'react'

const Input = ({ type, value, onChange }) => {
  return <input type={type} defaultValue={value} onChange={onChange} />
}

export default Input
