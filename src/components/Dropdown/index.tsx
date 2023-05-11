import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { TypeTicket } from '../../types';
import styles from './dropdown.module.css';


type DropdownType = {
    isActive: boolean,
    onClick: (item: TypeTicket) => void
}


export const Dropdown = (props: DropdownType) => {



    const state = useSelector((state: RootState): TypeTicket[] => state.ticket.typeTickets);

    return (
        <div className={props.isActive ? styles.dropdownContainer : styles.noActive} >
                {state.length > 0 && state.map(item => {
                    return (
                        <div 
                            key={item.id} 
                            onClick={() => props.onClick(item)}
                        >
                            {item.name}
                        </div>
                    )
                })}
        </div>
    )
}