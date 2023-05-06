import React, { Children } from 'react'

const Button = (props) => {
  return (
    <button>{props.children}</button>
  )
}

export default Button