import React, { useState } from 'react';
import styles from './calendar.module.css';
import { DateType } from '../../types';

type CalendarProps = {
    isActive: boolean,
    onclick: (date: DateType) => void
}

const weekdays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
};

const getDaysInMonth = (year: number, month: number) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let index = 1; index <= daysInMonth; index++) {
        const day = new Date(year, month, index);
        days.push({day: day.getDate(),month: month + 1, year } as DateType)
    }

    const firstDayOfMonth = getFirstDayOfMonth(month, year);

    const previousMonthDays = [];
    const previousMonthDaysCount = firstDayOfMonth - 1;
    const previousMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = previousMonthLastDay - previousMonthDaysCount ; i <= previousMonthLastDay; i++) {
        const day = new Date(year, month, i);
        previousMonthDays.push({day: day.getDate(), month: month + 1, year} as DateType);
    }
    const displayedDays = [...previousMonthDays, ...days].slice(0, 35);
    return displayedDays;
}

export const Calendar = (props: CalendarProps) => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectDay, setSelectDay] = useState<DateType>({
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear()
    });

    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth() );

    const handlePrevMonthClick = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonthClick = () => {
        if(currentDate.getMonth() > 12){
           return setCurrentDate(new Date(1, currentDate.getFullYear() + 1, 1));
        }
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };


    return (
        <div className={props.isActive ? styles.calendar : styles.calendarNone} >
            <div className={styles.header} >
                <p
                    onClick={() => handlePrevMonthClick()}
                >{"<"}</p>
                <h2>
                    Tháng {currentDate.getMonth() + 1}, {currentDate.getFullYear()}
                </h2>
                <p
                    onClick={() => handleNextMonthClick()}
                >{">"}</p>
            </div>

            <div className={styles.weekdays} >
                {weekdays.map((weekday) => {
                    return <div key={weekday} >{weekday}</div>
                })}
            </div>

            <div className={styles.days}>
                {daysInMonth.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={ selectDay.day === item.day && selectDay.month === item.month && selectDay.year === item.year ? styles.active : styles.day}
                            onClick={() => props.onclick(item)}
                        >
                            <p>
                                {item.day}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}