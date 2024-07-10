import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '../features/jobSlice'
import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer:{
    jobs:jobReducer,
    user:userReducer
  }
})