import { useCallback, useEffect, useState } from 'react';
import styles from './payment.module.css';
import Trini from '../../assets/images/Trini_Arnold_Votay1 2.svg';
import { Button, Input, InputChange, Backdrop } from '../../components';
import { TicketType, TypeTicket, PaymentInfo, InfoTicket, UserTicket } from '../../types';
import { getDataInLocalStorage } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { addUserTickets } from '../../store/reducers/ticketSlice';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { sendPay } from '../../apis';


const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

export const Payment = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const typeTicketState = useSelector((state: RootState): TypeTicket[] => state.ticket.typeTickets)

    const [ticket, setTicket] = useState<TicketType>({
        kindTicket: "",
        amountTicket: 0,
        dateUse: "",
        name: "",
        phone: 0,
        email: "",
    })
    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
        cardNumber: 0,
        name: "",
        dateExpire: `${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        cvv: ""
    })

    const [loading, setLoading] = useState<boolean>(false);

    const handleGetDataInLocalStorage = () => {
        const dataInLocalStorage = getDataInLocalStorage('ticketInfo');
        if (dataInLocalStorage !== undefined) {
            return setTicket(dataInLocalStorage);
        }
        else {
            return navigate('/');
        }
    }

    const calThePaymentAmount = useCallback((type: string) => {
        let amountPay: number = 0;
        typeTicketState.map((item) => {
            if (item.name === type) {
                return amountPay = ticket.amountTicket * item.price;
            }
            return amountPay;
        })

        return amountPay.toLocaleString('vi-VN');
    }, [ticket.amountTicket, typeTicketState])


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

    const handleClick = async () => {
        setLoading(!loading);

        const ticketInfo: InfoTicket = {
            amountTicket: ticket.amountTicket,
            dateUse: ticket.dateUse,
            email: ticket.email,
            kindTicket: ticket.kindTicket,
            name: ticket.name,
            phone: ticket.phone,
            paymentAmount: calThePaymentAmount(ticket.kindTicket)
        }
        const data = [paymentInfo, ticketInfo];
        const result = await sendPay(data) as {info: InfoTicket, tickets: UserTicket[]};

        console.log(result);
        
        // 86400000 milisecond = one day
        const expirationDate = new Date(Date.now() + 86400000).toUTCString();
        const tiketString = JSON.stringify(result?.tickets);
        document.cookie = `tickets=${tiketString}; expires=${expirationDate}`
        dispatch(addUserTickets(result?.tickets))

        const infoString = JSON.stringify(result?.info);
        document.cookie = `info=${infoString}; expires=${expirationDate}`
        setLoading(false)
        localStorage.removeItem('ticketInfo')
        navigate('/thanhtoanthanhcong')
    }
    
    return (
        <>
            {loading && <Backdrop >
                <Spin
                    spinning={loading}
                    indicator={antIcon}
                    size="large"
                >
                    <div className="content" />
                </Spin>
            </Backdrop>}

            <div className={styles.paymentContainer}>
                <h1>Thanh toán</h1>
                <div>
                    <div className={styles.listInfo}>
                        <div className={styles.listInfoHeader} >
                            <p>Vé cổng - {ticket.kindTicket}</p>
                        </div>

                        <div>
                            <div className={styles.firstRow} >
                                <div className={styles.firstRowInput} >
                                    <label className={styles.label} >Số tiền thanh toán</label>
                                    <div>
                                        <Input
                                            type='text'
                                            value={`${calThePaymentAmount(ticket.kindTicket)} VNĐ`}
                                        />
                                    </div>
                                </div>

                                <div className={styles.aumoutTicket} >
                                    <label className={styles.label} >Số lượng vé</label>
                                    <div>
                                        <Input
                                            type='text'
                                            value={ticket.amountTicket.toString()}
                                        />
                                        <p>Vé</p>
                                    </div>
                                </div>

                                <div className={styles.date} >
                                    <label className={styles.label} >Ngày sử dụng</label>
                                    <div>
                                        <Input
                                            type='text'
                                            value={ticket.dateUse}
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
        </>
    )
}