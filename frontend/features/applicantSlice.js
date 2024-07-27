import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const url = 'http://localhost:8000'
import Cookies from 'js-cookie'

const initialState = {
    myApplications:[],
    error:null,
    status:'idle'
}


export const applyJob = createAsyncThunk('job/apply',async(payload)=>{
    console.log(payload)
    try{
        const {data} = await axios.post(`${url}/applicants/${payload.job}/apply`,payload);
        return data
    }catch(e){
        console.log(e)
    }

})

export const myApplications = createAsyncThunk('application/myApplication',async()=>{
    
    try{
        const {data} = await axios.get(`${url}/applicants`,{
            headers:{
                Authorization:`Bearer ${JSON.parse(Cookies.get('token'))}`
            }
        });
        console.log(data);
        return data
    }catch(e){
        console.log(e)
    }

})

export const acceptApplicant = createAsyncThunk('job/accept',async(payload)=>{
    
    try{
        const {data} = await axios.patch(`${url}/applicants/${payload}/accept`,{
            headers:{
                Authorization:`Bearer ${JSON.parse(Cookies.get('token'))}`
            }
        });
        return data
    }catch(e){
        console.log(e)
    }

})
export const declineApplicant = createAsyncThunk('job/decline',async(payload)=>{
    
    try{
        const {data} = await axios.patch(`${url}/applicants/${payload}/decline`,{
            headers:{
                Authorization:`Bearer ${JSON.parse(Cookies.get('token'))}`
            }
        });
        return data
    }catch(e){
        console.log(e)
    }

})



const applicantSlice = createSlice({
    name:'applicants',
    initialState,
    reducers:{},

    extraReducers(builder){
            builder
                    .addCase(applyJob.pending,(state)=>{
                        state.status = 'pending'
                    })
                    .addCase(applyJob.fulfilled,(state)=>{
                        state.status = 'success'
                    })
                    .addCase(applyJob.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    .addCase(myApplications.pending,(state)=>{
                        state.status = 'pending'
                    })
                    .addCase(myApplications.fulfilled,(state,action)=>{
                        state.status = 'success'
                        state.myApplications = action.payload
                    })
                    .addCase(myApplications.rejected,(state,action)=>{
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

export default applicantSlice.reducer