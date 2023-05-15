import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TypeTicket, UserTicket } from "../../types";
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
    typeTickets: TypeTicket[],
    userTickets: UserTicket[]
}

const initialState: TicketSliceType = {
    typeTickets: [],
    userTickets: [],
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        addUserTickets: (state, action: { type: string, payload: UserTicket[] }) => {
            state.userTickets = action.payload
        }
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

export const { addUserTickets } = ticketSlice.actions

export default ticketSlice.reducer
