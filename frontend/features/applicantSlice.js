import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const url = 'http://localhost:8000'

const initialState = {
    error:null,
    status:'idle'
}


export const applyJob = createAsyncThunk('job/apply',async(payload)=>{
    console.log(payload)
    try{
        const {data} = await axios.post(`${url}/jobs/applicant/${payload.job}/apply`,payload);
        return data
    }catch(e){
        console.log(e)
    }

})

export const acceptApplicant = createAsyncThunk('job/accept',async(payload)=>{
    
    try{
        const {data} = await axios.patch(`${url}/jobs/applicant/${payload}/accept`);
        return data
    }catch(e){
        console.log(e)
    }

})
export const declineApplicant = createAsyncThunk('job/accept',async(payload)=>{
    
    try{
        const {data} = await axios.patch(`${url}/jobs/applicant/${payload}/decline`);
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
                    .addCase(applyJob.pending,(state,action)=>{
                        state.status = 'pending'
                    })
                    .addCase(applyJob.fulfilled,(state,action)=>{
                        state.status = 'success'
                    })
                    .addCase(applyJob.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    // accept job
                    .addCase(acceptApplicant.fulfilled,(state)=>{
                        state.status = 'success'
                    })
                    .addCase(acceptApplicant.pending,(state)=>{
                        state.status = 'pending'
                    })
                    .addCase(acceptApplicant.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    // decline job
                    .addCase(declineApplicant.fulfilled,(state)=>{
                        state.status = 'success'
                    })
                    .addCase(declineApplicant.pending,(state)=>{
                        state.status = 'pending'
                    })
                    .addCase(declineApplicant.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
    }
})

export default jobSlice.reducer