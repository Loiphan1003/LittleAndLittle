import React from 'react'
import styles from './tag.module.css';

type TagProps = {
  text: string,
  isActive: string | null ,
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Tag = (props: TagProps) => {
  return (
    <div className={props.isActive === props.text ? styles.active : styles.normal} onClick={props.handleClick}>
        <p>{props.text}</p>
    </div>
  )
}
