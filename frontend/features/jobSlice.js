import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const url = 'http://localhost:8000'

const initialState = {
    job:[],
    error:null,
    status:'idle'
}


export const getJobs = createAsyncThunk('job/sgetJobs',async()=>{
    
    try{
        const {data} = await axios.get(url+'/jobs');
        console.log(data,'here')
        return data
    }catch(e){
        console.log(e)
    }

})

const jobSlice = createSlice({
    name:'jobs',
    initialState,
    reducers:{},

    extraReducers(builder){
            builder
                    .addCase(getJobs.fulfilled,(state,action)=>{
                        state.job = action.payload
                        state.status = 'success'
                    })
                    .addCase(getJobs.pending,(state,action)=>{
                        state.status = 'pending'
                    })
                    .addCase(getJobs.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
    }
})

export default jobSlice.reducer