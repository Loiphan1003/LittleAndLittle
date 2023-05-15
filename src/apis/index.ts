import axios from "axios";
import { db } from "../config/firebase";
import { addDataInColectionHistory, addDataInColectionTicket } from "../config/firebase/firestore";
import { ContactType, InfoTicket, PaymentInfo, UserTicket } from "../types";

const baseURL = 'https://little-and-little-api.vercel.app'

export const getAllEvent = async () => {
    try {
        const response = await axios.get(`${baseURL}/event/`)
        return response.data;
    } catch (error) {
        console.error(error)        
        return [];
    }
}

export const postFeedback = async (data: ContactType) => {
    try {
        const response = await axios.post(`${baseURL}/feedback/send`, data)
        return response.data;
    } catch (error) {
        console.error(error)        
        return [];
    }
}

export const getTypeTickets = async () => {
    try {
        const response = await axios.get(`${baseURL}/ticket/typeTicket`);
        return response.data;
    } catch (error) {
        console.error(error)
        return [];
    }
}

export const sendPay = async (data: (PaymentInfo | InfoTicket)[]) => {
    const payer = data[1] as InfoTicket;
    
    const tickets: UserTicket[] = [];


    const result = await addDataInColectionHistory(db, 'historyPayer', payer)
    
    for (let index = 0; index < payer.amountTicket; index++) {
        const ticket = {
            type: payer.kindTicket,
            dateUse: payer.dateUse,
            idPayer: result.id
        }
        const resultTicket = await addDataInColectionTicket(db, ticket)
        if(result.status === true) tickets.push(resultTicket.data as UserTicket);
    }

    if(tickets.length === 0) return ({status: false, message: "Something wrong!" })
    
    const response = {
        info: payer,
        tickets
    }

    return response;
}

export const sendEmail = async (data: InfoTicket) => {
    try {
        const response = await axios.post(`${baseURL}/email/send`, data);
        if(response.data.status === false) return [];
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}