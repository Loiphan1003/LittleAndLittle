import { useRef } from 'react';
import styles from './ticket.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QRCode from 'qrcode.react';
import Alvin from '../../assets/images/Alvin_Arnold_Votay1 1.svg';
import { Button } from '../../components';


const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
};

export const Ticket = () => {

    const sliderRef = useRef<Slider>(null)

    const handleNextClick = () => {
        sliderRef.current?.slickNext();
    }

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev();
    }

    return (
        <div className={styles.ticketContainer} >
            <h1>Thanh toán thành công</h1>
            <div className={styles.group} >
                <div className={styles.border} >
                    <div 
                        className={styles.previousBtn} 
                        onClick={() => handlePrevClick()}
                    />

                    <div className={styles.content} >
                        <div className={styles.listTicket} >
                            <Slider
                                className={styles.slider}
                                ref={sliderRef}
                                {...settings}
                            >
                                <div className={styles.cardTicket}>
                                    <QRCode size={78} value={"a"} />
                                    <h3>ALT20210501</h3>
                                    <p className={styles.typeTicket} >Vé cổng</p>
                                    <p className={styles.line} >---</p>
                                    <p className={styles.date} >Ngày sử dụng: 31/05/2021</p>
                                    <div className={styles.tick} ></div>
                                </div>

                                <div className={styles.cardTicket}>
                                    <QRCode size={78} value={"a"} />
                                    <h3>ALT20210501</h3>
                                    <p className={styles.typeTicket} >Vé cổng</p>
                                    <p className={styles.line} >---</p>
                                    <p className={styles.date} >Ngày sử dụng: 31/05/2021</p>
                                    <div className={styles.tick} ></div>
                                </div>

                                <div className={styles.cardTicket}>
                                    <QRCode size={78} value={"a"} />
                                    <h3>ALT20210501</h3>
                                    <p className={styles.typeTicket} >Vé cổng</p>
                                    <p className={styles.line} >---</p>
                                    <p className={styles.date} >Ngày sử dụng: 31/05/2021</p>
                                    <div className={styles.tick} ></div>
                                </div>

                                <div className={styles.cardTicket}>
                                    <QRCode size={78} value={"a"} />
                                    <h3>ALT20210501</h3>
                                    <p className={styles.typeTicket} >Vé cổng</p>
                                    <p className={styles.line} >---</p>
                                    <p className={styles.date} >Ngày sử dụng: 31/05/2021</p>
                                    <div className={styles.tick} ></div>
                                </div>

                                <div className={styles.cardTicket}>
                                    <QRCode size={78} value={"a"} />
                                    <h3>ALT20210501</h3>
                                    <p className={styles.typeTicket} >Vé cổng</p>
                                    <p className={styles.line} >---</p>
                                    <p className={styles.date} >Ngày sử dụng: 31/05/2021</p>
                                    <div className={styles.tick} ></div>
                                </div>

                                <div className={styles.cardTicket}>
                                    <QRCode size={78} value={"a"} />
                                    <h3>ALT20210501</h3>
                                    <p className={styles.typeTicket} >Vé cổng</p>
                                    <p className={styles.line} >---</p>
                                    <p className={styles.date} >Ngày sử dụng: 31/05/2021</p>
                                    <div className={styles.tick} ></div>
                                </div>
                            </Slider>
                        </div>

                        <div className={styles.amountTicket}>
                            <p>Số lương: 12 vé</p>
                            <p>Trang 1/3</p>
                        </div>
                    </div>

                    <div 
                        className={styles.nextBtn} 
                        onClick={() => handleNextClick()}
                    />
                </div>
            </div>

            <div className={styles.btn}>
                <div>
                    <Button
                        text='Tải về'
                        handleClick={() => console.log('tải về')}
                    />
                </div>

                <div>
                    <Button
                        text='Gửi Email'
                        handleClick={() => console.log('Gửi Email')}
                    />
                </div>
            </div>

            <img className={styles.alvin} src={Alvin} alt="Alvin" />
        </div>
    )
}