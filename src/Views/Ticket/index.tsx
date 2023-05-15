import { useEffect, useRef, useState } from 'react';
import styles from './ticket.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QRCode from 'qrcode';
import Alvin from '../../assets/images/Alvin_Arnold_Votay1 1.svg';
import { Backdrop, Button, QRCodeComponent } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserTickets } from '../../store/reducers/ticketSlice';
import { InfoTicket, TicketType, UserTicket } from '../../types';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { LoadingOutlined } from '@ant-design/icons';
import { sendEmail } from '../../apis';
import { notification, Spin } from 'antd';


const settings = {
    infinite: false,
    speed: 500,
    // rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
};

type PaginationType = {
    currentPage: Number,
    totalPate: Number
}

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;



export const Ticket = () => {

    const sliderRef = useRef<Slider>(null)
    const dispatch = useDispatch();
    const [api, contextHolder] = notification.useNotification();
    const ticketState = useSelector((state: RootState) => state.ticket.userTickets);
    const navigate = useNavigate()

    const [count, setCount] = useState<PaginationType>({
        currentPage: 0,
        totalPate: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let data: UserTicket[] = [];
        const cookieString = document.cookie;
        const cookies = cookieString.split(';');
        const myCookie = cookies.find(cookie => cookie.trim().startsWith('tickets='));
        const myCookieValue = myCookie ? myCookie.split('=')[1] : null;
        if (myCookieValue !== null) {
            data = JSON.parse(myCookieValue)
            dispatch(addUserTickets(data))
        }

        if (data.length === 0) return navigate('/');
        let totalPage = data.length / 4;

        setCount({
            currentPage: 1,
            totalPate: Number.isInteger(totalPage) ? totalPage : +Math.floor(totalPage) + 1
        })
    }, [navigate, dispatch])


    const handleNextClick = () => {
        sliderRef.current?.slickNext();
        if (count.currentPage >= count.totalPate) return;
        setCount({ ...count, currentPage: +count.currentPage + 1 })
    }

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev();
        if (count.currentPage <= 1) return;
        setCount({ ...count, currentPage: +count.currentPage - 1 })
    }

    const getCookieInfo = () => {
        const cookieData = document.cookie.split(';').find(cookie => cookie.trim().startsWith('info='));

        if (cookieData === undefined) return null;

        const getCookieInfo = cookieData.split('=')[1];
        const info: InfoTicket = JSON.parse(getCookieInfo);
        return info;
    }

    const handleDownloadClick = () => {
        const info: InfoTicket | null = getCookieInfo();

        if (info === null) return;


        const canvas = document.createElement('canvas') as HTMLCanvasElement;
        const qrCodeValue = `Người thanh toán: ${info.name} / Loại vé: ${info.kindTicket} / Số vé: ${info.amountTicket} / Ngày sử dụng: ${info.dateUse} / Email: ${info.email} / Tổng tiền: ${info.paymentAmount}`;
        QRCode.toDataURL(canvas, qrCodeValue, { scale: 10 }, (error: any) => {
            if (error) {
                console.error(error);
                return;
            }
            const dataURL = canvas.toDataURL('image/png');
            const tempLink = document.createElement('a');
            tempLink.href = dataURL;
            tempLink.download = 'qrcode.png';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        });
    }


    const openNotification = (placement: NotificationPlacement) => {
        api.open(
            {
                message: '',
                description: <div>
                    Gửi Email thành công. <br />
                    Vui lòng kiểm tra hộp thư, bạn nhé!
                </div>,
                placement,
                duration: 10,
            }
        );
    }

    const handleSendEmail = async () => {
        const info: InfoTicket | null = getCookieInfo();
        setLoading(true)
        if (info === null) return;
        const result = await sendEmail(info);
        console.log(result);
        if (result.status) {
            openNotification('topRight');
            setLoading(false);
        }
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
                                    {ticketState.map((item) => {
                                        return (
                                            <div
                                                className={styles.cardTicket}
                                                key={item.id}
                                            >
                                                <QRCodeComponent value={item.id} />
                                                <h3>{item.id}</h3>
                                                <p className={styles.typeTicket} >{item.type}</p>
                                                <p className={styles.line} >---</p>
                                                <p className={styles.date} >Ngày sử dụng: {item.dateUse}</p>
                                                <div className={styles.tick} ></div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>

                            <div className={styles.amountTicket}>
                                <p>Số lương: {ticketState.length} vé</p>
                                <p>Trang {count.currentPage.toString()}/{count.totalPate.toString()}</p>
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
                            handleClick={() => handleDownloadClick()}
                        />
                    </div>

                    <div>
                        <Button
                            text='Gửi Email'
                            handleClick={() => handleSendEmail()}
                        />
                    </div>
                </div>

                {contextHolder}
                <img className={styles.alvin} src={Alvin} alt="Alvin" />
            </div>
        </>
    )
}