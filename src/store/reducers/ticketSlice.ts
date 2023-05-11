import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TypeTicket } from "../../types";
import { getTypeTickets } from "../../apis";


export const getAllTypeTicket = createAsyncThunk(
    'ticket/getAllTypeTicket',
    async () => {
        try {
            const result = await getTypeTickets();
            return result;
        } catch (error) {
            return;
        }
    }
)


type TicketSliceType = {
    typeTickets: TypeTicket[]
}

const initialState: TicketSliceType = {
    typeTickets: [],
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getAllTypeTicket.pending, (state, action) => {
        });
        builder.addCase(getAllTypeTicket.fulfilled, (state, action) => {
            state.typeTickets = action.payload;
        });
        builder.addCase(getAllTypeTicket.rejected, (state, action) => {
        });
    },

})

export default ticketSlice.reducer
