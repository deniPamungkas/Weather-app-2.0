import React from 'react'
import "./textInput.scss"

const Input = (props) => {
  return (
    <label htmlFor={props.name} className="wrap-input">{props.name}
        <input id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} pattern={props.pattern} required className='text-input'/>
        <span>{props.errorMessege}</span>
    </label>
  )
}

export default Input