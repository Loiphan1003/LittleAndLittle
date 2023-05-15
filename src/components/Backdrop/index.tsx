import React from "react"
import  styles from './backdrop.module.css'

type BackdropType = {
    children: React.ReactNode
}

export const Backdrop = (props: BackdropType) => {
    return (
        <div className={styles.backdrop}>
            {props.children}
        </div>
    )
}