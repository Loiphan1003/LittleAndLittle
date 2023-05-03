import styles from './input.module.css';

type InputProps = {
    type: string,
}

export const Input = ( props: InputProps ) => {
    return (
        <input className={props.type === "text" ? styles.button : styles.password} />
    )
}