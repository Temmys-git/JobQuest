import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import Cookies from 'js-cookie'
const url = 'http://localhost:8000'

const user = Cookies.get('user') 
const initialState = {
    user:user?JSON.parse(user):null,
    token:Cookies.get('token'),
    error:null,
    status:'idle'
}


export const login = createAsyncThunk('login',async(payload,{rejectWithValue})=>{
    
    try{
        const {data} = await axios.post(url+'/login',payload);
        if(data){
            Cookies.set('user',JSON.stringify(data?.user))
            Cookies.set('token',JSON.stringify(data?.token))
        }
        return data
    }catch(e){
        rejectWithValue(e.response.data)
        console.log(e.response.data)
    }

})

export const register = createAsyncThunk('register',async(payload)=>{
    try{
        const {data} = await axios.post(url+'/register',payload);
        Cookies.set('user',JSON.stringify(data.user))
        Cookies.set('token',JSON.stringify(data.token))
        console.log(data)
        return data;
    }catch(e){
        console.log(e)
    }

})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout:(state)=>{
            state.user = null
            state.token = null
            Cookies.remove('user')
            Cookies.remove('token')
        }
    },

    extraReducers(builder){
            builder
                    .addCase(login.pending,(state)=>{
                        state.status = 'pending'
                    })
                    .addCase(login.fulfilled,(state,action)=>{
                        state.user = action.payload?.user
                        state.token = action.payload?.token
                        state.status = 'success'
                    })
                    .addCase(login.rejected,(state,action)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
                    .addCase(register.pending,(state)=>{
                        state.status = 'pending'
                    })
                    .addCase(register.fulfilled,(state,action)=>{
                        state.user = action.payload?.user
                        state.token = action.payload?.token
                        state.status = 'success'
                    })
                    .addCase(register.rejected,(state)=>{
                        state.error = action.payload
                        state.status = 'rejected'
                    })
    }
})

export const {logout} = userSlice.actions;

export default userSlice.reducer