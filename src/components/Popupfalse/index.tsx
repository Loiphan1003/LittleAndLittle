import styles from './popupFalse.module.css'

export const PopupFalse = () => {
    return (
        <div className={styles.popup} >
            <div className={styles.header}>
                <div className={styles.icon} />
            </div>
            <div className={styles.body} >
                <p>
                    Hình như đã có lỗi xảy ra khi thanh toán...
                </p>

                <p>
                    Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.
                </p>
            </div>
        </div>
    )
}