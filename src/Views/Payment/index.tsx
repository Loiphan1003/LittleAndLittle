import styles from './payment.module.css';
import Trini from '../../assets/images/Trini_Arnold_Votay1 2.svg';
// import calendaBtn from '../../assets/images/calendarBtn.svg';
import { Button, Input } from '../../components';

export const Payment = () => {
    return (
        <div className={styles.paymentContainer}>
            <h1>Thanh toán</h1>
            <div>
                <div className={styles.listInfo}>
                    <div className={styles.listInfoHeader} >
                        <p>Vé cổng - Vé gia đình</p>
                    </div>

                    <div>
                        <div className={styles.firstRow} >
                            <div className={styles.firstRowInput} >
                                <label className={styles.label} >Số tiền thanh toán</label>
                                <div>
                                    <Input type='text'/>
                                </div>
                            </div>

                            <div className={styles.aumoutTicket} >
                                <label className={styles.label} >Số lượng vé</label>
                                <div>
                                    <Input type='text'/>
                                    <p>Vé</p>
                                </div>
                            </div>

                            <div className={styles.date} >
                                <label className={styles.label} >Ngày sử dụng</label>
                                <div>
                                    <Input type='text'/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.name} >
                            <label className={styles.label} >Thông tin liên hệ</label>
                            <div>
                                <Input type='text'/>
                            </div>
                        </div>

                        <div className={styles.phoneNumber} >
                            <label className={styles.label} >Điện thoại</label>
                            <div>
                                <Input type='text'/>
                            </div>
                        </div>

                        <div className={styles.email} >
                            <label className={styles.label} >Email</label>
                            <div>
                                <Input type='text'/>
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
                                <Input type='text'/>
                            </div>
                        </div>

                        <div className={styles.input} >
                            <label htmlFor="">Họ tên chủ thẻ</label>
                            <div>
                                <Input type='text'/>
                            </div>
                        </div>

                        <div className={styles.inputCalendar} >
                            <label htmlFor="">Ngày hết hạn</label>
                            <div>
                                <Input type='text'/>
                                <div className={styles.calendarBtn} ></div>
                            </div>
                        </div>

                        <div className={styles.inputCVVorCVC} >
                            <label htmlFor="">CVV/CVC</label>
                            <div>
                                <Input type='password'/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <Button
                            text='Thanh toán'
                            handleClick={() => console.log('click')}
                        />
                    </div>
                </div>
            </div>

            <img className={styles.trini} src={Trini} alt="Trini" />

        </div>
    )
}