import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Header from './components/Header.jsx';
import Job from './components/Job.jsx';
import Login from './pages/Login.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   },
//   {
//     path:'/login',
//     element:<Login/>
//   },
//   {
//     path:'/about',
//     element:<About/>
//   },
//   {
//     path: '/contact',
//     element:<Contact/>

//   },
//   {
//     path: '/jobs/:id',
//     element:<Job/>

//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     {/* <RouterProvider router={router} /> */}
     <App/>
  </React.StrictMode>,
)
