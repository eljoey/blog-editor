import React from 'react'

const TextArea = ({ value, onChange }) => {
  return <textarea value={value} onChange={onChange} rows="5" cols="35" />
}

export default TextArea
