import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvent } from "../../apis";
import { EventType } from "../../types";

export const getAllEvents = createAsyncThunk(
    'event/getAllEvent',
    async () => {
        try {
            const response = await getAllEvent();
            return response;
        } catch (error) {
            return;
        }
    }
);


type EventState = {
    events: EventType[]
}

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