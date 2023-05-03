import { configureStore } from "@reduxjs/toolkit"
import menuSlice from "./reducers/menuSlice"

const store = configureStore({
    reducer: {
        menu: menuSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store