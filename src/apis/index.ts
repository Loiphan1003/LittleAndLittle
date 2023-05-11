import axios from "axios";
import { ContactType } from "../types";

export const getAllEvent = async () => {
    try {
        const response = await axios.get('')
        return response.data;
    } catch (error) {
        console.error(error)        
        return [];
    }
}

export const postFeedback = async (data: ContactType) => {
    try {
        const response = await axios.post('', data)
        return response.data;
    } catch (error) {
        console.error(error)        
        return [];
    }
}

export const getTypeTickets = async () => {
    try {
        const response = await axios.get('');
        return response.data;
    } catch (error) {
        console.error(error)
        return [];
    }
}
