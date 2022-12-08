import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  { examSlice } from '../components/Exam/ExamSlice';

const reducer = combineReducers({
  exam: examSlice.reducer
})

export const store = configureStore({
   reducer,
});

  
