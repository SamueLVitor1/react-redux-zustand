import { configureStore, createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer café', 'Lavar a louça'],

    reducers:{},
})

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer
    }
});