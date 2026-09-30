import { configureStore } from '@reduxjs/toolkit'

export const counterSlice =createSlice({
    name:"counter",
 initialState:{
    value:0 //as satate ka sath rahna hai
 },
 reducers: {
    increment:(state)=>{
state.value +=1
    },
    decrement:(state)=>{
state.value -=1
    },
 }
})
export const {increment,decrement}= counterSlice.action
export default counterSlice.reducer //buliding ma reducer banata hai  