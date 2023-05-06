import React from 'react'
import * as CSS from '../component/style'

const Button = (props) => {
  // <Button type='positive'>희망</Button>
  // <Button type='negative'>절망</Button>
  return (
    <CSS.Button
      type={props.type}
    >{props.children}</CSS.Button>
  )
}

export default Button