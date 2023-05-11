import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';
import Alex from '../../assets/images/Alex_AR_Lay_Do shadow 1.svg';
import Address from '../../assets/images/adress 1.svg';
import Email from '../../assets/images/Email.svg';
import Phone from '../../assets/images/Phone.svg';
import { postFeedback } from '../../apis';
import { ContactType } from '../../types';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { PopupFalse } from '../../components';


export const Contact = () => {

  const [api, contextHolder] = notification.useNotification();
  const [isError, setIsError] = useState<boolean>(false);
  const [form, setForm] = useState<ContactType>({
    address: "",
    message: "",
    name: "",
    phone: 0,
    email: "",
  })

  useEffect(() => {
    if (isError) {
      setInterval(() => {
        setIsError(false);
      }, 3000)
    }
  }, [isError])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const openNotification = (placement: NotificationPlacement) => {
    api.open(
      {
        message: '',
        description: <div>
          Gửi liên hệ thành công. <br />
          Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!
        </div>,
        placement,
        duration: 10,
      }
    );
  }


  const handleClick = () => {
    if (form.address !== "" && form.email !== "" && form.message !== "" && form.name !== "" && form.phone !== 0) {
      postFeedback(form)
        .then(result => {
          // console.log(result);
          if (result.status) {
            openNotification('topRight');
            return setForm({
              address: "",
              message: "",
              name: "",
              phone: 0,
              email: "",
            })
          } else {
            setIsError(true)
            return false;
          }
        })
    }
    else {
      return console.log('err');
    }

  }


  return (
    <>
      <div className={styles.container}>
        <img src={Alex} alt="Alex" />
        <div>
          <p className={styles.textHeading} >Liên lạc</p>
          <div>

            <div className={styles.inputFrame}>
              <div className={styles.border} >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.
                </p>

                <div className={styles.rowInputOne}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder='Tên'
                    name='name'
                    defaultValue={form.name}
                    onChange={handleChange}
                  />

                  <input
                    className={styles.inputRight}
                    type="email"
                    placeholder='Email'
                    name='email'
                    defaultValue={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.rowInputOne}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder='Số điện thoại'
                    name='phone'
                    defaultValue={form.phone}
                    onChange={handleChange}
                  />

                  <input
                    className={styles.inputRight}
                    type="text"
                    placeholder='Địa chỉ'
                    name='address'
                    defaultValue={form.address}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  placeholder='Lời nhắn'
                  name='message'
                  defaultValue={form.message}
                  onChange={(e) => handleChange(e)}
                />

                <div
                  className={styles.btn}
                  onClick={handleClick}
                >
                  <p>Gửi liên hệ</p>
                </div>
              </div>
            </div>

            <div className={styles.rightFrame} >

              <div >
                <div className={styles.rightBorder}>
                  <img src={Address} alt="icon" />
                  <div>
                    <p className={styles.label} >Địa chỉ:</p>
                    <p className={styles.description} >86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>

              <div >
                <div className={styles.rightBorder}>
                  <img src={Email} alt="icon" />
                  <div>
                    <p className={styles.label}>Email:</p>
                    <p className={styles.description} >investigate@your-site.com</p>
                  </div>
                </div>
              </div>


              <div >
                <div className={styles.rightBorder}>
                  <img src={Phone} alt="icon" />
                  <div>
                    <p className={styles.label} >Điện thoại:</p>
                    <p className={styles.description} >+84 145 689 798</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {contextHolder}
      </div>
      {isError && <PopupFalse />}
    </>
  )
}
