import React from 'react'

import styles from './Button.module.css'
//you can even write it her in the props written in the function parameter
const Button = (props) => {
    //destructuring the props object
    const {isOutline,icon,text,...rest}= props

    //learnt about the ..rest it hekps to add events to the button made by props and edited
  return (
    <button {...rest} className={isOutline ? styles.outline_btn:styles.primary_btn}>
      {icon}
        {text}
    </button>
  )
}

export default Button
