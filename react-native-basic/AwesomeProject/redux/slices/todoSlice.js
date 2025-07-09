import { createSlice } from '@reduxjs/toolkit'
const todoSlice =  createSlice({
    name: 'todo',
    initialState: {
        currentId: 4,
        todos: []
    },
    reducers: {}
});

export default todoSlice.reducer;