export type menuType = {
    text: string,
    path: string
}

export type DateType = {
    day: number,
    month: number,
    year: number
}

export type TicketType = {
    type: string,
    amount: number,
    date: string,
    name: string,
    phone: number,
    email: string,
}

export interface ContactType {
    name: string,
    email: string,
    phone: number,
    address: string,
    message: string
}

export interface EventType {
    id: string,
    name: string,
    amount: number,
    price: number,
    place: string,
    dateStart: string,
    dateEnd: string,
    subDescriptionOne: string,
    subDescriptionTwo: string,
    subDescriptionThree: string,
}

export interface TypeTicket {
    id: string,
    name: string,
    price: number
}

export interface PaymentInfo {
    cardNumber: number,
    name: string,
    dateExpire: string,
    cvv: string,
}