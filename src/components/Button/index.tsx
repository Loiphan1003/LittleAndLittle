import React from 'react'
import styles from './button.module.css'

type ButtonProps = {
    text: string,
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={styles.containerBtn}>
        <div>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
