import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getAllEvent } from "../../apis";
import { EventType } from "../../types";
import {db} from '../../config/firebase';
import { getAllValueInOneColection } from "../../config/firebase/firestore";
import { Result } from "antd";





type EventState = {
    events: EventType[]
}


export const getAllEvents = createAsyncThunk(
    'event/getAllEvent',
    async () => {
        try {
            const events = await getAllValueInOneColection(db, 'events');
            return events as EventType[];
        } catch (error: any) {
            return [];
        }
    }
)


const initialState: EventState = {
    events: [],
}

const menuSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getAllEvents.pending, (state, action) => {
        });
        builder.addCase(getAllEvents.fulfilled, (state, action) => {
            state.events = action.payload;
            // handle the fulfilled action here
        });
        builder.addCase(getAllEvents.rejected, (state, action) => {
            // handle the rejected action here
        });
    },
})


export default menuSlice.reducer