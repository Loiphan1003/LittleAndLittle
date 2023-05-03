import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
    text: string,
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={styles.containerBtn} onClick={props.handleClick}>
        <div>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
