import React from 'react';
import styles from './inputChange.module.css';

type InputProps = {
    name: string,
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputChange = (props: InputProps) => {

    return (
        <input
            name={props.name}
            className={props.type === "text" ? styles.button : styles.password}
            value={props.value}
            onChange={(e) => props.onChange(e)}
        />

    )
}