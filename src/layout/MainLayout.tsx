import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/Little & Little Logo.svg'
import PhoneIcon from '../assets/images/PhoneIcon.svg'
import styles from './mainLayout.module.css';
import { Tag } from '../components';
import { useNavigate } from 'react-router-dom';

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
    const [selectMenu, setSelectMenu] = useState<string | null>(null)

    useEffect(() => {
        setSelectMenu('Trang chủ')
    }, [])

    const handleClick = (text: string, path: string) => {
        setSelectMenu(text);
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
                                    isActive={selectMenu}
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
