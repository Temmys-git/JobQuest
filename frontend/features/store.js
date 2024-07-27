import { configureStore } from '@reduxjs/toolkit'
import jobReducer from '../features/jobSlice'
import userReducer from '../features/userSlice'
import applicantReducer from '../features/applicantSlice'
import appStateReducer from '../features/appStateSlice'

export const store = configureStore({
  reducer:{
    jobs:jobReducer,
    user:userReducer,
    myApplication:applicantReducer,
    appState:appStateReducer,
  }
})