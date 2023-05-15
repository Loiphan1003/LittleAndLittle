import React, { useCallback, useEffect, useState } from 'react'
import Logo from '../assets/images/Little & Little Logo.svg'
import PhoneIcon from '../assets/images/PhoneIcon.svg'
import styles from './mainLayout.module.css';
import { Tag } from '../components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllEvents } from '../store/reducers/eventSlice';
import { getAllTypeTicket } from '../store/reducers/ticketSlice';


type MainLayoutProps = {
    children: React.ReactNode
}

const menu = [
    {
        text: "Trang chủ",
        path: '/'
    },
    {
        text: "Sự kiện",
        path: '/sukien'
    },
    {
        text: "Liên hệ",
        path: '/lienhe'
    }
]

export const MainLayout = (props: MainLayoutProps) => {

    const navigate = useNavigate()
    const dispatch = useDispatch<any>()

    const location = useLocation();
    const [isActive, setIsActive] = useState<string>("Trang chủ");

    const checkURL = useCallback((pathname: string) => {
        if (pathname === '/') {
            setIsActive("Trang chủ");
        }
        if (pathname === "/sukien") {
            setIsActive("Sự kiện")
        }
        if (pathname === "/lienhe") {
            setIsActive("Liên hệ")
        }
        else if(pathname !== "/" && pathname !== "/sukien" && pathname !== "/lienhe"){
            setIsActive('/')
        }
    }, [])

    useEffect(() => {
        dispatch(getAllEvents())
        dispatch(getAllTypeTicket());
        checkURL(location.pathname)

    }, [dispatch, checkURL, location.pathname])
    
    const handleClick = (text: string, path: string) => {
        setIsActive(text);
        navigate(path);
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <img src={Logo} alt="Logo" />

                    <div className={styles.listMenu}>

                        <div className={styles.menu}>
                            {menu.map((item) => (
                                <Tag
                                    key={item.text}
                                    text={item.text}
                                    isActive={isActive}
                                    handleClick={() => handleClick(item.text, item.path)}
                                />
                            ))}
                        </div>

                        <div className={styles.contact} >
                            <img src={PhoneIcon} alt="icon" />
                            <p>0123456789</p>
                        </div>
                    </div>

                </div>
            </header>

            <section>
                <div>
                    <div className={styles.background}>
                        {props.children}
                    </div>
                </div>
            </section>
        </div>
    )
}
