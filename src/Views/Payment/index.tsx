import { useCallback, useEffect, useState } from 'react';
import styles from './payment.module.css';
import Trini from '../../assets/images/Trini_Arnold_Votay1 2.svg';
import { Button, Input, InputChange } from '../../components';
// import { useDispatch } from 'react-redux';
// import { updateValue } from '../../store/reducers/menuSlice';
import { TicketType, TypeTicket, PaymentInfo } from '../../types';
import { getDataInLocalStorage } from '../../utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';




export const Payment = () => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const typeTicketState = useSelector((state: RootState): TypeTicket[] => state.ticket.typeTickets)

    const [ticket, setTicket] = useState<TicketType>({
        type: "",
        amount: 0,
        date: "",
        name: "",
        phone: 0,
        email: "",
    })
    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
        cardNumber: 0,
        name: "",
        dateExpire: "",
        cvv: ""
    })

    const handleGetDataInLocalStorage = () => {
        const dataInLocalStorage = getDataInLocalStorage('ticketInfo');
        if (dataInLocalStorage !== undefined) {
            return setTicket(dataInLocalStorage);
        }
        else {
            // return dispatch(updateValue({ text: "Trang chủ", path: '/' }))
            return navigate('/');
        }
    }

    const calThePaymentAmount = useCallback((type: string) => {
        let amountPay: number = 0;
        typeTicketState.map((item) => {
            if (item.name === type) {
                return amountPay = ticket.amount * item.price;
            }
        })

        return amountPay.toLocaleString('vi-VN');
    }, [ticket.amount, typeTicketState])


    const handleChangePaymenInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPaymentInfo((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect((): any => {
        handleGetDataInLocalStorage()
    }, [])

    const handleClick = () => {
        // console.log(paymentInfo);
        
        // localStorage.removeItem('ticketInfo')
        navigate('/thanhtoanthanhcong')
    }

    return (
        <div className={styles.paymentContainer}>
            <h1>Thanh toán</h1>
            <div>
                <div className={styles.listInfo}>
                    <div className={styles.listInfoHeader} >
                        <p>Vé cổng - {ticket.type}</p>
                    </div>

                    <div>
                        <div className={styles.firstRow} >
                            <div className={styles.firstRowInput} >
                                <label className={styles.label} >Số tiền thanh toán</label>
                                <div>
                                    <Input
                                        type='text'
                                        value={`${calThePaymentAmount(ticket.type)} VNĐ`}
                                    />
                                </div>
                            </div>

                            <div className={styles.aumoutTicket} >
                                <label className={styles.label} >Số lượng vé</label>
                                <div>
                                    <Input
                                        type='text'
                                        value={ticket.amount.toString()}
                                    />
                                    <p>Vé</p>
                                </div>
                            </div>

                            <div className={styles.date} >
                                <label className={styles.label} >Ngày sử dụng</label>
                                <div>
                                    <Input
                                        type='text'
                                        value={ticket.date}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.name} >
                            <label className={styles.label} >Thông tin liên hệ</label>
                            <div>
                                <Input
                                    type='text'
                                    value={ticket.name}
                                />
                            </div>
                        </div>

                        <div className={styles.phoneNumber} >
                            <label className={styles.label} >Điện thoại</label>
                            <div>
                                <Input
                                    type='text'
                                    value={ticket.phone.toString()}
                                />
                            </div>
                        </div>

                        <div className={styles.email} >
                            <label className={styles.label} >Email</label>
                            <div>
                                <Input
                                    type='text'
                                    value={ticket.email}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.join}>
                </div>

                <div className={styles.infoTicket} >
                    <div className={styles.header}>
                        <p>Thông tin thanh toán</p>
                    </div>

                    <div className={styles.inputframe} >
                        <div className={styles.input} >
                            <label htmlFor="">Số thẻ</label>
                            <div>
                                <InputChange
                                    name='cardNumber'
                                    type='text'
                                    value={paymentInfo.cardNumber.toString()}
                                    onChange={(e) => handleChangePaymenInfo(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.input} >
                            <label htmlFor="">Họ tên chủ thẻ</label>
                            <div>
                                <InputChange
                                    name='name'
                                    type='text'
                                    value={paymentInfo.name}
                                    onChange={(e) => handleChangePaymenInfo(e)}
                                />
                            </div>
                        </div>

                        <div className={styles.inputCalendar} >
                            <label htmlFor="">Ngày hết hạn</label>
                            <div>
                                <InputChange
                                    name='dateExpire'
                                    type='text'
                                    value={paymentInfo.dateExpire}
                                    onChange={(e) => handleChangePaymenInfo(e)}
                                />
                                <div className={styles.calendarBtn} ></div>
                            </div>
                        </div>

                        <div className={styles.inputCVVorCVC} >
                            <label htmlFor="">CVV/CVC</label>
                            <div>
                                <InputChange
                                    name='cvv'
                                    type='password'
                                    value={paymentInfo.cvv}
                                    onChange={(e) => handleChangePaymenInfo(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <Button
                            text='Thanh toán'
                            handleClick={() => handleClick()}
                        />
                    </div>
                </div>
            </div>

            <img className={styles.trini} src={Trini} alt="Trini" />

        </div>
    )
}