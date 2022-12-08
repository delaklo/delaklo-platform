import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    globalScore: 0,
}


export const examSlice = createSlice({
    name: 'exam',
    initialState,
    reducers:{
        setGlobalScore: (state, action)=>{
            state.globalScore += action.payload;
        }
    }
})

export const {setGlobalScore} = examSlice.actions;

export const selectScore = (state) => state.exam.globalScore;

export default examSlice.reducer;