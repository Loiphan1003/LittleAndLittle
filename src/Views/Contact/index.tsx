import React from 'react';
import styles from './contact.module.css';
import Alex from '../../assets/images/Alex_AR_Lay_Do shadow 1.svg';
import Address from '../../assets/images/adress 1.svg';
import Email from '../../assets/images/Email.svg';
import Phone from '../../assets/images/Phone.svg';

export const Contact = () => {
  return (
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
                <input className={styles.input} type="text" placeholder='Tên' />
                <input className={styles.inputRight} type="email" placeholder='Email' />
              </div>

              <div className={styles.rowInputOne}>
                <input className={styles.input} type="text" placeholder='Số điện thoại' />
                <input className={styles.inputRight} type="text" placeholder='Địa chỉ' />
              </div>

              <textarea placeholder='Lời nhắn' />

              <div className={styles.btn} >
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
    </div>
  )
}
