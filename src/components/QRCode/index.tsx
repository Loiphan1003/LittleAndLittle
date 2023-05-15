import QRCode from 'qrcode.react';

type QRCodeComponentType = {
    value: string
}

export const QRCodeComponent = (props: QRCodeComponentType) => {
    return (
        <QRCode 
            size={78} 
            value={`Mã vé: ${props.value} / Loại vé: Vé cổng / Ngày sử dụng: 09/05/2023 / Người thanh toán: Phan Vũ Lợi`}
        />
    )
}