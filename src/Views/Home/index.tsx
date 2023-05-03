import React from "react";
import styles from "./home.module.css";
import Lisa from "../../assets/images/Lisa_Arnold_Lay_Do_F2 3.svg";
import DamSenLogo from "../../assets/images/DamSenLogo.svg";
import StartIcon from "../../assets/images/start.svg";
import People from "../../assets/images/render fix hair 1.svg";
import BalloonOne from "../../assets/images/Hot_Air_Balloon_One.svg";
import BalloonTwo from "../../assets/images/Hot_Air_Balloon_Two.svg";
import BalloonThree from "../../assets/images/Hot_Air_Balloon_Three.svg";
import BalloonFour from "../../assets/images/Hot_Air_Balloon_Four.svg";
import BalloonFive from "../../assets/images/Hot_Air_Balloon_Five.svg";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateValue } from "../../store/reducers/menuSlice";

export const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateValue({text: "Thanh toán", path: "/thanhtoan" }))
    navigate('/thanhtoan')
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header}>
          <img src={DamSenLogo} alt="Dam sen logo" />
          <div>
            <p>Đầm sen</p>
            <p>park</p>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.listInfo}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.</p>
            <p>Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>

            <div>
              <div>
                <img src={StartIcon} alt="icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div>
                <img src={StartIcon} alt="icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div>
                <img src={StartIcon} alt="icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <div>
                <img src={StartIcon} alt="icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className={styles.join}></div>

          <div className={styles.infoTicket}>

            <div className={styles.selection} >
              <input disabled type="text" placeholder=" " value={"Gói gia đình"} />

              <div className={styles.selectBtn}></div>
            </div>

            <div className={styles.amountTicketAndDate}>
              <input
                className={styles.amountTicket}
                type="text"
                placeholder="Số lượng vé"
              />
              <div className={styles.dateAndBtn}>
                <input
                  className={styles.dateUse}
                  type="text"
                  placeholder="Ngày sử dụng"
                />
                <div className={styles.calendarBtn}></div>
              </div>
            </div>

            <input type="text" placeholder="Họ và tên" />
            <input type="text" placeholder="Số điện thoại" />
            <input type="text" placeholder="Địa chỉ email" />

            <div className={styles.btn}>
              <Button 
                text="Đặt vé"
                handleClick={() => handleClick()}
              />
            </div>


            <div className={styles.yourTicket}></div>
          </div>

        </div>
      </div>

      <img src={BalloonFive} alt="Khinh khi cau" className={styles.BalloonFive} />
      <img src={BalloonTwo} alt="Khinh khi cau" className={styles.BalloonTwoRight} />
      <img src={BalloonFour} alt="Khinh khi cau" className={styles.BalloonFour} />
      <img src={BalloonThree} alt="Khinh khi cau" className={styles.BalloonThree} />
      <img src={BalloonTwo} alt="Khinh khi cau" className={styles.BalloonTwo} />
      <img src={BalloonOne} alt="khinh khi cau" className={styles.BalloonOne} />
      <img src={People} alt="people" className={styles.People} />
      <img src={Lisa} alt="lisa" className={styles.lisa} />
    </div>
  );
};
