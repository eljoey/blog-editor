import React from 'react'

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      defaultValue={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input
