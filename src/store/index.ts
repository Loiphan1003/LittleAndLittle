import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./reducers/menuSlice"
import eventSlice from "./reducers/eventSlice"
import ticketSlice from "./reducers/ticketSlice"

const store = configureStore({
    reducer: {
        menu: menuSlice,
        event: eventSlice,
        ticket: ticketSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store