import { collection, getDocs, addDoc } from 'firebase/firestore';
import { EventType } from '../../types';

export const getAllValueInOneColection = async (db: any, nameCollection: string) => {
    try {
        let result: any[]  = [];
        const querySnapshot = await getDocs(collection(db, nameCollection));
        querySnapshot.forEach((doc: { data: () => any; id: any; }) => {
            result.push({...doc.data(), id: doc.id})
        })
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const addDataInColection = async (db: any, nameCollection: string, data: {}) => {
    
    try {
        const docRef = await addDoc(collection(db, nameCollection), data);
        return {
            status: true,
            message: "Add success"
        }
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
}

export const addDataInColectionHistory = async (db: any, nameCollection: string, data: {}) => {
    try {
        const docRef = await addDoc(collection(db, nameCollection), data);
        return {
            status: true,
            message: "Add success",
            id: docRef.id
        }
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
}

export const addDataInColectionTicket = async (db: any, data: {}) => {
    try {
        const docRef = await addDoc(collection(db, 'ticket'), data);
        return {
            status: true,
            message: "Add success",
            data: {...data, id: docRef.id }
        }
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
}

