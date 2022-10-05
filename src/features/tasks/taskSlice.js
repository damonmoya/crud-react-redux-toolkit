import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "1",
        title: "Clean the house",
        description: "Take out the garbage",
        completed: false
    },
    {
        id: "2",
        title: "Wash the car",
        description: "Clean dirty spots",
        completed: false
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    }
});

export default taskSlice.reducer;