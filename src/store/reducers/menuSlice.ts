import { createSlice } from "@reduxjs/toolkit";
import { menuType } from "../../types";

type MenuState = {
    value: menuType
}

type Action = {
    payload: menuType,
    type: string
}

const initialState: MenuState = {
    value: { text: "Trang chủ", path: '/' },
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        updateValue: (state, action: Action) => {
            state.value = action.payload
        }
    }
})

export const { updateValue } = menuSlice.actions;

export default menuSlice.reducer