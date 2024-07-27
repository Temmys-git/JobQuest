import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const url = 'http://localhost:8000'
import Cookies from 'js-cookie'

const initialState = {
        modal:false,
        jobId:null
}



const appStateSlice = createSlice({
    name:'appState',
    initialState,
    reducers:{
        setModal:(state,action)=>{
            state.modal = action.payload
            console.log(action.payload)
        },
        setJobId:(state,action)=>{
            state.jobId = action.payload
            console.log(action.payload)
        }
    },
})

export const {setModal,setJobId} = appStateSlice.actions
export default appStateSlice.reducer