import styles from './input.module.css';

type InputProps = {
    type: string,
    value: string,
}

export const Input = ( props: InputProps ) => {
    return (
        <input 
            className={props.type === "text" ? styles.button : styles.password} 
            value={props.value}
        />
    )
}