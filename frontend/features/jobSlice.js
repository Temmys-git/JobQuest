import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const url = 'http://localhost:8000'

const initialState = {
    jobs:[],
    singleJob:{},
    error:null,
    status:'idle'
}


export const getJobs = createAsyncThunk('job/getJobs',async()=>{
    
    try{
        const {data} = await axios.get(url+'/jobs');
        return data
    }catch(e){
        console.log(e)
    }

})

export const storeJob = createAsyncThunk('job/storeJob',async(payload)=>{
    
    try{
        const {data} = await axios.post(url+'/jobs',payload,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        return data
    }catch(e){
        console.log(e)
    }

})



// export const editJob = createAsyncThunk('job/editJob',async(payload)=>{
//     const {id,job} = payload;
//     console.log(job)
//     try{
//         const {data} = await axios.put(url+'/jobs/'+id,{...payload.job},{
//             headers:{
//                 'Content-Type':'multipart/form-data'
//             },
//             params:id
//         });
//         return data
//     }catch(e){
//         console.log(e)
//     }

// })

export const editJob = createAsyncThunk('job/storeJob',async(payload)=>{
    
    try{
        const {data} = await axios.put(url+'/jobs/'+payload.id,payload,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        return data
    }catch(e){
        console.log(e)
    }

})

export const deleteJob = createAsyncThunk('job/deleteJob',async(id)=>{
    try{
        const {data} = await axios.delete(url+'/jobs/'+id,{},{
            headers:{
                'Content-Type':'multipart/form-data'
            },
            params:id
        });
        return data
    }catch(e){
        console.log(e)
    }

})

export const getSingleJob = createAsyncThunk('job/getSingleJob',async(payload)=>{
    try{
        const {data} = await axios.get(url+'/jobs/'+payload);
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
                        state.jobs = action.payload
                        state.status = 'success'
                    })
                    .addCase(getJobs.pending,(state,action)=>{
                        state.status = 'pending'
                    })
                    .addCase(getJobs.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    // store job
                    .addCase(storeJob.fulfilled,(state,action)=>{
                        state.jobs = action.payload
                        state.status = 'success'
                    })
                    .addCase(storeJob.pending,(state,action)=>{
                        state.status = 'pending'
                    })
                    .addCase(storeJob.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    //single job
                    .addCase(getSingleJob.fulfilled,(state,action)=>{
                        state.singleJob = action.payload
                        state.status = 'success'
                    })
                    .addCase(getSingleJob.pending,(state,action)=>{
                        state.status = 'pending'
                    })
                    .addCase(getSingleJob.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    //delete job
                    .addCase(deleteJob.fulfilled,(state,action)=>{
                        state.jobs = state.jobs.filter(job=>job.id !== action.meta.arg)
                        console.log(state.jobs)
                        console.log(action,'here')
                        state.status = 'success'
                    })
                    .addCase(deleteJob.pending,(state,action)=>{
                        state.status = 'pending'
                    })
                    .addCase(deleteJob.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
    }
})

export default jobSlice.reducer